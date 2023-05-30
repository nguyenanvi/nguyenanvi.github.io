import { Request, Response, NextFunction } from "express";
import { default as Notification, INotificationsModel } from "../models/notifications.model";
import mongoose from "mongoose";


export const createNotification = async (req: Request, res: Response) => {
  const { sender, header, body } = req.body;
  if (!sender ) return res.status(422).send({message: "missing sender"});
  if (!header || !body ) return res.status(422).send({message: "missing header or body"});

  // retrieve "receiver" field
  const receivers = req.body.receivers as string[];
  if (!receivers ) return res.status(422).send({message: "missing receivers"});

  try {
    new Notification<INotificationsModel>({
      sender,
      receivers,
      header, body,
      read: false
    }).save()
    .then( (noti)=>{
      if(noti){
        return res.send({message: 'created notification'});
      }
    } )
    .catch(err=>res.status(500).send(err.message));

  } catch (err) {
    return res.status(500).send({message: "Error while creating notification: "+err.message})
  }
};

export const fetchNotifications = async (req:Request, res:Response) => {
  const uid = req.body.id;
  try {
    Notification.find({
      receivers: {
        $in: [uid]
      },
    }).exec()
    .then( result=>res.send(result))
    .catch( error=>res.status(500).send(error))
  } catch (error) {
    return res.status(500).send({message: "Error while retrieving notifications: "+error.message})
  }
};
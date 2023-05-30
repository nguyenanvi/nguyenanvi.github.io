import express from "express";

import { createNotification, fetchNotifications } from "../controller/notification.controller";

export default (router: express.Router) => {
  router.post("/notification/fetch", fetchNotifications);
  router.post("/notification/create", createNotification);
};
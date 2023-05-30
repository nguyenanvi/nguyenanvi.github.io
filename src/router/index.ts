import express from "express";
import authenticationRoute from "./authentication.router";
import notificationRoute from "./notification.router";
// import usersRoute from "././users.router";
const router = express.Router();

export default (): express.Router => {
  authenticationRoute(router);
  notificationRoute(router);
  // usersRoute(router);
  return router;
};

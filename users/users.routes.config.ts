import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import usersController from "./controllers/users.controller";
import usersMiddleware from "./middleware/users.middleware";
export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UserRoutes");
  }
  configureRoutes(): express.Application {
    this.app
      .route("/users")
      .get(usersController.listUsers)
      .post(usersController.createUser);
    /**
     * This is the middleware function that runs before any call is made to /users/:userId
     * it simply passes control to the next applicable function below using next()
     */
    this.app.param("userId", usersMiddleware.extractUserId);
    this.app
      .route("/users/:userId")
      .all(usersMiddleware.validateUserExists)
      .get(usersMiddleware.extractUserId, usersController.getUserById)
      .delete(usersController.removeUser);
    this.app.put("/users/:userId", [
      usersMiddleware.validateRequestUserBodyFields,
      usersMiddleware.validateSameEmailBelongToSameUser,
      usersController.put,
    ]);
    this.app.patch("/users/:userId", [
      usersMiddleware.validatePatchEmail,
      usersController.patch,
    ]);

    return this.app;
  }
}

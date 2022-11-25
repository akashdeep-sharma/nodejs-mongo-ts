import debug from "debug";
import express, { NextFunction } from "express";
import userService from "../services/user.service";

const log: debug.IDebugger = debug("app:users-controller");
class UsersMiddleware {
  async validateRequestUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (req.body && req.body.email && req.body.password) {
      next();
    } else {
      res.status(400).send({
        error: " Missing required fields",
      });
    }
  }
  async validateSameEmailDoesNotExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await userService.getUserByEmail(req.body.email);
    if (user) {
      res.status(400).send({
        error: `User with ${req.body.email} does not exist`,
      });
    } else {
      next();
    }
  }
  async validateSameEmailBelongToSameUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await userService.getUserByEmail(req.body.email);
    if (user && user._id === req.params.userId) {
      next();
    } else {
      res.status(400).send("Invalid Email");
    }
  }
  /**
   * This validates the email
   * @param req Request from Api
   * @param res Response
   * @param next Middleware Function
   */
  validatePatchEmail = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.body.email) {
      log("Validating Email ", req.body.email);
      this.validateSameEmailBelongToSameUser(req, res, next);
    } else {
      next();
    }
  };
  /**
   * Validates if the user Exists
   */
  async validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user = await userService.readById(req.params.userId);
    if (user) {
      next();
    } else {
      res.status(404).send({
        error: `User with ${req.params.userId} not found`,
      });
    }
  }
  async extractUserId(
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) {
    req.body.id = req.params.userid;
    next();
  }
}
export default new UsersMiddleware();

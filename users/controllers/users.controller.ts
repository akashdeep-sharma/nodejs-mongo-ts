import userService from "../services/user.service";
import express from "express";
import debug from "debug";
import argon2 from "argon2";

const log: debug.IDebugger = debug("app:users-controller");
class UsersController {
  async listUsers(req: express.Request, res: express.Response) {
    const users = await userService.list(100, 0);
    res.status(200).send(users);
  }
  async getUserById(req: express.Request, res: express.Response) {
    console.log(req.body.id);
    const user = await userService.readById(req.body.id);
    res.status(200).send(user);
  }
  async createUser(req: express.Request, res: express.Response) {
    req.body.passoword = await argon2.hash(req.body.password);
    const userId = await userService.create(req.body);
    res.status(201).send({ id: userId });
  }
  async patch(req: express.Request, res: express.Response) {
    if (req.body.password) {
      req.body.password = await argon2.hash(req.body.password);
    }
    log(await userService.patchById(req.body.id, req.body));
    res.status(204).send(`${req.body.id} updated`);
  }
  async put(req: express.Request, res: express.Response) {
    req.body.password = await argon2.hash(req.body.password);
    log(await userService.putById(req.body.id, req.body));
    res.status(204).send(`${req.body.id} updated`);
  }
  async removeUser(req: express.Request, res: express.Response) {
    log(await userService.deleteById(req.body.id));
    res.status(204).send(`${req.body.id} deleted`);
  }
}
export default new UsersController();

import { Router } from "express";
import { UserController } from "../controller/user.controller";

const routes = Router();

const userController = new UserController();

const routersObj = [userController.router];

routes.use(routersObj);

export default routes;

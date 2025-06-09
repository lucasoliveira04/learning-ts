import { Router, Request, Response } from "express";
import UserResponse from "../types/user-response";
import { UserRequest } from "../types/user-request";
import { User } from "../model/user.modal";
import { UserServices } from "../services/user/user.service";

export class UserController {
  public router: Router;
  private userServices: UserServices;

  constructor() {
    this.router = Router();
    this.routes();

    this.userServices = new UserServices();
  }

  private routes() {
    this.router.get(
      `/api/users`,
      this.getUsers as any | Response<UserResponse>
    );

    this.router.post(
      "/api/users/add",
      this.addUser as any | Response<UserResponse>
    );
  }

  private addUser = async (
    req: Request,
    res: Response
  ): Promise<Response<UserRequest>> => {
    try {
      const { name, email, age, cpf } = req.body;

      const userRequest: UserRequest = await this.userServices.addUser({
        ...req.body,
      });

      return res.status(201).json({
        message: "User created successfully",
        data: userRequest,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message || "Unspecified error",
        data: new Date(),
        path: req.path,
        method: req.method,
      });
    }
  };

  private getUsers = async (
    req: Request,
    res: Response
  ): Promise<Response<User[]>> => {
    return res.status(200).json({
      message: "Users fetched successfully",
      data: await this.userServices.getAllUsers(),
      timestamp: new Date(),
    });
  };
}

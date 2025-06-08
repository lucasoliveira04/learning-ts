import { Router, Request, Response } from "express";
import UserResponse from "../types/user.response";
import { UserServices } from "../services/user.services";
import UserValidation from "../utils/validation/user.validation";
import { UserRequest } from "../types/user.request";
import { User } from "../model/user.modal";

export class UserController {
  public router: Router;
  private userServices: UserServices;

  constructor() {
    this.router = Router();
    this.routes();

    this.userServices = new UserServices(UserValidation);
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

  private addUser = (req: Request, res: Response): Response<UserRequest> => {
    try {
      const { name, email, age, cpf } = req.body;

      const userRequest = this.userServices.addUser({ ...req.body });

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
      data: await this.userServices.getUsers(),
      timestamp: new Date(),
    });
  };
}

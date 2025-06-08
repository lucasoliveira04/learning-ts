import { Router, Request, Response } from "express";

export class UserController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get("/users", this.getUsers);
  }

  private getUsers(req: Request, res: Response) {
    res.json({ message: "List of users" });
  }
}

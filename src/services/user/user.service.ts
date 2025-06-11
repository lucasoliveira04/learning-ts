import { User } from "../../model/user.modal";
import { UserRequest } from "../../types/user-request";
import UserValidation from "../../utils/validation/user.validation";
import { AddUser } from "./add-user.service";
import { DeleteUser } from "./delete-user.service";
import { GetAllUsers } from "./get-users.service";

export class UserServices {
  private addUserService: AddUser;
  private getAllUsersService: GetAllUsers;
  private deleteUserService: DeleteUser;

  constructor() {
    this.addUserService = new AddUser(UserValidation);
    this.getAllUsersService = new GetAllUsers();
    this.deleteUserService = new DeleteUser();
  }

  async addUser(user: UserRequest): Promise<UserRequest> {
    return this.addUserService.addUser(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.getAllUsersService.getAllUsers();
  }

  async deleteUser(userId: number): Promise<void> {
    return this.deleteUserService.DeleteUser(userId);
  }
}

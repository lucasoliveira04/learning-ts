import { UserRequest } from "../types/user.request";
import UserValidation from "../utils/validation/user.validation";

export class UserServices {
  constructor(private userValidator: typeof UserValidation) {}

  public addUser(user: UserRequest): UserRequest {
    try {
      this.userValidator.validateFields(user);

      const userResponse: UserRequest = {
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return userResponse;
    } catch (error) {
      throw error;
    }
  }
}

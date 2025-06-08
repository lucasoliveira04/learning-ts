import { User } from "../model/user.modal";
import { userRepository } from "../repository/user.repository";
import { UserRequest } from "../types/user.request";
import UserValidation from "../utils/validation/user.validation";

export class UserServices {
  constructor(private userValidator: typeof UserValidation) {}

  addUser(user: UserRequest): UserRequest {
    try {
      this.userValidator.validateFields(user);

      const userResponse: UserRequest = {
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const newUser = userRepository.create(userResponse);

      userRepository.save(newUser);

      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      return await userRepository.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }
}

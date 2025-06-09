import { userRepository } from "../../repository/user.repository";
import { UserRequest } from "../../types/user-request";
import UserValidation from "../../utils/validation/user.validation";

export class AddUser {
  constructor(private userValidator: typeof UserValidation) {}

  async addUser(user: UserRequest): Promise<UserRequest> {
    try {
      this.userValidator.validateFields(user);

      const userResponse: UserRequest = {
        ...user,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const newUser = await userRepository.create(userResponse);
      userRepository.save(newUser);
      return newUser;
    } catch (validationError: Error | unknown) {
      if (validationError instanceof Error) {
        throw new Error("Validation failed: " + validationError.message);
      } else {
        throw new Error("Validation failed: " + String(validationError));
      }
    }
  }
}

import { User } from "../../model/user.modal";
import { userRepository } from "../../repository/user.repository";

export class GetAllUsers {
  async getAllUsers(): Promise<User[]> {
    try {
      return await userRepository.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }
}

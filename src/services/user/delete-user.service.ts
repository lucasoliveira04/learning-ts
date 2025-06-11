import { userRepository } from "../../repository/user.repository";

export class DeleteUser {
  async DeleteUser(userId: number): Promise<void> {
    try {
      const user = await userRepository.findOneBy({ id: userId });
      if (!user) {
        throw new Error("User not found");
      }

      await userRepository.remove(user);
    } catch (error) {
      throw new Error("Failed to delete user: " + error);
    }
  }
}

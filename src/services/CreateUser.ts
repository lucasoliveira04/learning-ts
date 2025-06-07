import User from "../model/User";
import { UserRepository } from "../repository/UserRepository";

export class CreatedUser {
  public userRepository: UserRepository = new UserRepository();

  public addUser(): any {
    const user = new User("Lucas", "lucas@example.com", "password123");
    return this.userRepository.save(user);
  }

  public getAllUsers(): any[] {
    return this.userRepository.findAll();
  }
}

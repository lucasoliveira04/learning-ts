import User from "../model/User";
import { UserRepository } from "../repository/UserRepository";

export class CreatedUser {
  public userRepository: UserRepository = new UserRepository();

  public addUser(name: string, email: string, password: string): any {
    const user = new User(name, email, password);
    return this.userRepository.save(user);
  }

  public getAllUsers(): any[] {
    return this.userRepository.findAll();
  }
}

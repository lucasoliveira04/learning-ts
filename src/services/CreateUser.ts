import User from "../model/User";
import { UserRepository } from "../repository/UserRepository";
import { UserInputProps } from "../types/user.input";
import { validateInputUser } from "../utils/validations/user/user.validation";

export class CreatedUser {
  public userRepository: UserRepository = new UserRepository();

  public async addUser(
    name: string,
    email: string,
    password: string
  ): Promise<UserInputProps | any> {
    const isValid: boolean = await validateInputUser({
      name,
      email,
      password,
    });

    if (!isValid) {
      return Promise.reject(new Error("Invalid user input."));
    }

    const user = new User(name, email, password);

    return this.userRepository.save(user);
  }

  public getAllUsers(): any[] {
    return this.userRepository.findAll();
  }
}

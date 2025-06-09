import { UserRequest } from "../../types/user-request";
import NameValidation from "./name.validation";

class UserValidation {
  public static validateFields(user: UserRequest): boolean {
    const nameValidation = new NameValidation();

    if (!nameValidation.validateField(user.name)) {
      throw new Error("Invalid name");
    }

    return true;
  }
}

export default UserValidation;

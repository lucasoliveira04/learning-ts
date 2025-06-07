import { UserInputProps } from "../../../types/user.input";
import { EmailValidation } from "./email.validation";
import { NameValidation } from "./name.validation";
import { PasswordValidation } from "./password.validation";

export async function validateInputUser({
  name,
  email,
  password,
}: UserInputProps): Promise<boolean> {
  const nameValidation = new NameValidation();
  const emailValidation = new EmailValidation();
  const passwordValidation = new PasswordValidation();

  if (!nameValidation.validationField(name)) {
    throw new Error("Invalid name format.");
  }

  if (!emailValidation.validationField(email)) {
    throw new Error("Invalid email format.");
  }

  if (!passwordValidation.validationField(password)) {
    throw new Error("Invalid password format.");
  }

  return Promise.resolve(true);
}

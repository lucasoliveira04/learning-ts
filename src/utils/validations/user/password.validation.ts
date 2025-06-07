import { IValidationFields } from "../../../types/IValidationFields";

export class PasswordValidation implements IValidationFields {
  validationField = (value: any): boolean => {
    let invalidPasswords = ["admin", "admin123", "password"];

    if (typeof value !== "string" || value.length < 8 || value.length > 128) {
      return false;
    }

    for (let i = 0; i < 10; i++) {
      if (value.includes(i.toString())) {
        invalidPasswords.push(i.toString());
      }
    }

    return true;
  };
}

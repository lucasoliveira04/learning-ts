import { IValidationFields } from "../../../types/IValidationFields";

export class EmailValidation implements IValidationFields {
  private regex: RegExp;

  constructor() {
    this.regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  }

  validationField = (value: any): boolean => {
    if (typeof value !== "string" || value.length < 10 || value.length > 254) {
      return false;
    }

    return this.regex.test(value);
  };
}

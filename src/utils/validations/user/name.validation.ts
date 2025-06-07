import { IValidationFields } from "../../../types/IValidationFields";

export class NameValidation implements IValidationFields {
  private regex: RegExp;

  constructor() {
    this.regex = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ\s'’\-]*[a-zA-ZÀ-ÿ]$/;
  }

  validationField = (value: any): boolean => {
    if (typeof value !== "string" || value.length < 1 || value.length > 100) {
      return false;
    }

    return this.regex.test(value);
  };
}

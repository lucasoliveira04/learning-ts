import ValidationFieldsImplements from "./ValidationFieldsImplements";

class NameValidation implements ValidationFieldsImplements<string> {
  validateField(field: string): boolean {
    if (typeof field !== "string") {
      return false;
    }

    if (field.length < 3 || field.length > 50) {
      return false;
    }

    return true;
  }
}

export default NameValidation;

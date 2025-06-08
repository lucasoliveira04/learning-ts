export class User {
  private name: string;
  private email: string;
  private age: number;
  private cpf: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(name: string, email: string, age: number, cpf: string) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cpf = cpf;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

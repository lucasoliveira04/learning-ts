class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;
  private createdAt: Date;

  constructor(name: string, email: string, password: string) {
    this.id = Math.floor(Math.random() * 10000);

    this.name = name;
    this.email = email;
    this.password = password;

    this.createdAt = new Date();
  }
}

export default User;

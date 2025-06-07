import User from "../model/User";

export class CreatedUser {
  public database: any[] = [];

  public addUser(): any {
    const newUser = new User("Lucas", "lucas@example.com", "password123");

    this.database.push(newUser);
    return newUser;
  }

  public getAllUsers(): any[] {
    return this.database;
  }
}

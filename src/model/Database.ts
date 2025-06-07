import MethodsOrmImplements from "../types/MethodsOrmImplements";

class Database implements MethodsOrmImplements {
  private database: any[] = [];

  public save(data: any[]): any[] {
    const newData = { ...data };
    this.database.push(newData);
    return this.database;
  }

  public findById(id: number): any[] {
    return this.database.filter((item) => item.id === id);
  }

  public findAll(): any[] {
    return this.database;
  }
}

export default Database;

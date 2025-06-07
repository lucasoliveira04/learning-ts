import Database from "../model/Database";
import MethodsOrmImplements from "../types/MethodsOrmImplements";

export class UserRepository implements MethodsOrmImplements {
  private database: Database = new Database();

  public save(data: any): any[] {
    return this.database.save(data);
  }

  public findById(id: number): any[] {
    return this.database.findById(id);
  }

  public findAll(): any[] {
    return this.database.findAll();
  }
}

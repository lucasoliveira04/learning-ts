import { DataSource } from "typeorm";
import { User } from "./model/user.modal";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin123",
  database: "storedb",
  synchronize: true,
  logging: true,
  entities: [User],
});

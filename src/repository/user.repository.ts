import { AppDataSource } from "../data-source";
import { User } from "../model/user.modal";

export const userRepository = AppDataSource.getRepository(User);

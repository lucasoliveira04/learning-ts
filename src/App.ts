import { CreatedUser } from "./services/CreateUser";

const userServices = new CreatedUser();

userServices.addUser();

console.log("usuario adicionado: ", userServices);
console.log(userServices.getAllUsers());

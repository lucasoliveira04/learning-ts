import readline from "readline";
import { CreatedUser } from "./services/CreateUser";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str: string): Promise<string> => {
  return new Promise((resolve) => rl.question(str, resolve));
};

async function main() {
  const name = await question("Enter your name: ");
  const email = await question("Enter your email: ");
  const password = await question("Enter your password: ");

  const userServices = new CreatedUser();
  userServices.addUser(name, email, password);

  console.log("Usuários cadastrados: ", await userServices.getAllUsers());
  rl.close();
}

main();

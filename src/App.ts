import { CreatedUser } from "./services/CreateUser";

const createdUser = async () => {
  try {
    const userService: CreatedUser = new CreatedUser();
    const user = await userService.addUser(
      "Lucas",
      "lucas@gmail.com",
      "admin123dde"
    );
    return user;
  } catch (error: any) {
    throw error;
  }
};

createdUser()
  .then((data: any) => {
    console.log("User created successfully:", data);
  })
  .catch((error: any) => {
    console.error("Error creating user:", error.message);
  });

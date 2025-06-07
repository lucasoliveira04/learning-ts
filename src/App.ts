import { CreatedUser } from "./services/CreateUser";

const createdUser = async () => {
  try {
    const userService: CreatedUser = new CreatedUser();
    const user: any = userService.addUser("Lucas", "lucas@gmail.com", "123456");

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};


createdUser()
  .then((data: any) => {
    return data;
  })
  .catch((error: any) => {
    return error;
  });




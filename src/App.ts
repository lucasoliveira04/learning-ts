import express, { Application } from "express";
import routes from "./routes/app.routes";
import { AppDataSource } from "./data-source";
const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/", routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

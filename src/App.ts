import express, { Application } from "express";
import routes from "./routes/app.routes";
const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

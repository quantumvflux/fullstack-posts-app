import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./api/routes.js";
import * as dotenv from "dotenv";
import { getData } from "./services/getData.js";
dotenv.config();

const app = express();

getData();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});

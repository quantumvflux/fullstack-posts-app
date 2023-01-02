import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export const getData = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database connected"));
};

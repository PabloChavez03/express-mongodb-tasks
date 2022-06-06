import mongoose from "mongoose";
import { DB_NAME } from "./config";


//conectando mongoose
mongoose
  .connect(DB_NAME)
  .then(() => {
    console.log("DB connected to", mongoose.connection.name);
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });
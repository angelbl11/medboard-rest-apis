import mongoose from "mongoose";
import config from "./config";
const uri = `mongodb+srv://admin:${config.DBPASSWORD}@cluster0.a1zfhkd.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((error) => console.log(error));

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/medboard")
  .then((db) => console.log("db is connected"))
  .catch((error) => console.log(error));

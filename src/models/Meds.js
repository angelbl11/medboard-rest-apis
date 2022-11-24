import { Schema, model } from "mongoose";
const medSchema = new Schema(
  {
    name: String,
    grammage: Number,
    lab: String,
    type: String,
    status: Boolean,
    caducity: Date,
    available: Number,
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Med", medSchema);

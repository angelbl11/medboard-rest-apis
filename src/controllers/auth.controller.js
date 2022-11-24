import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
export const signUp = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    email,
    password: await User.encryptPassword(password),
  });
  const savedUser = await newUser.save();
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });
  res.status(200).json({ token });
};
export const login = async (req, res) => {
  res.json("login");
};

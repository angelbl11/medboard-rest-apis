import User from "../models/User";
import jwt from "jsonwebtoken";
import Role from "../models/Role";
import config from "../config";
export const signUp = async (req, res) => {
  const { email, firstName, lastName, password, roles, associationName } =
    req.body;
  const newUser = new User({
    firstName,
    lastName,
    email,
    associationName,
    password: await User.encryptPassword(password),
  });
  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) {
    return res
      .status(400)
      .json({ message: "Usuario ya registrado anteriormente" });
  }
  const associationFound = await User.findOne({
    associationName: req.body.associationName,
  });
  if (associationFound) {
    return res
      .status(400)
      .json({ message: "Asociación registrada anteriormente" });
  }
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "association" });
    newUser.roles = [role._id];
  }
  const savedUser = await newUser.save();
  console.log(savedUser);
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });
  res.status(200).json({ token });
};
export const login = async (req, res) => {
  const userFound = await User.find({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }
  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );
  if (!matchPassword) {
    return res
      .status(401)
      .json({ token: null, message: "Contraseña incorrecta" });
  }
  console.log(userFound);
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token });
};

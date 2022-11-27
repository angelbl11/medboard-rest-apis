import { ROLES } from "../models/Role";
export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `El rol ${req.body.roles[i]} no existe`,
        });
      }
    }
  }
  next();
};

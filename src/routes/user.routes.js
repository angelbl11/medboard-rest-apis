import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authJwt, validator } from "../middlewares/";
const router = Router();
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, validator.checkRolesExisted],
  userController.createrUser
);
export default router;

import { Router } from "express";
const router = Router();
import * as authController from "../controllers/auth.controller";
import { validator } from "../middlewares";
router.post("/login", authController.login);
router.post("/signup", validator.checkRolesExisted, authController.signUp);
export default router;

import { Router } from "express";
import * as medsControllers from "../controllers/meds.controller";
import { authJwt } from "../middlewares";
const router = Router();
router.get("/", medsControllers.getMeds);
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  medsControllers.createMeds
);
router.put(
  "/:medId",
  [authJwt.verifyToken, authJwt.isAdmin],
  medsControllers.updateMeds
);
router.delete(
  "/:medId",
  [authJwt.verifyToken, authJwt.isAdmin],
  medsControllers.deleteMeds
);
export default router;

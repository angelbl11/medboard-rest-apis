import { Router } from "express";
import * as medsControllers from "../controllers/meds.controller";
const router = Router();
router.get("/", medsControllers.getMeds);
router.post("/", medsControllers.createMeds);
router.put("/:medId", medsControllers.updateMeds);
router.delete("/:medId", medsControllers.deleteMeds);
export default router;

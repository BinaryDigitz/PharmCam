import { Router } from "express";
import {
  registerPharmacy,
  loginPharmacy,
  pharmacyProfile,
  updatePharmacy,
  updateOncall,
  updateOpeningHours,
} from "../controllers/pharmacy.controllers.js";

const pharmacyRouter = Router();

pharmacyRouter.post("/register", registerPharmacy);
pharmacyRouter.get("/login", loginPharmacy);
pharmacyRouter.get("/profile", pharmacyProfile);
pharmacyRouter.put("/update/profile", updatePharmacy);
pharmacyRouter.put("/update/opening-hours", updateOpeningHours);
pharmacyRouter.put("/update/oncall-days", updateOncall);

export default pharmacyRouter;

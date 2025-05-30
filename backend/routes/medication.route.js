import { Router } from "express";
import isAuth from '../middlewares/isAuth.js'
import {
  registerMedication,
  pharmacyMedications,
  updateMedication,
  deleteMedication,
  searchMedication,
} from "../controllers/medication.controllers.js";

const medicatonRouter = Router();

medicatonRouter.post("/register", isAuth, registerMedication);
medicatonRouter.get("/pharmacy/:pharmacyId/list", pharmacyMedications);
medicatonRouter.put("/update/:medicationId", updateMedication);
medicatonRouter.delete("/delete/:medicationId", deleteMedication);
medicatonRouter.get("/search", searchMedication);

export default medicatonRouter;

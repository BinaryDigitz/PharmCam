import { Router } from "express";
import {
  getTowns,
  search,
  pharmacyDetails,
} from "../controllers/public.controllers.js";

const publicRouter = Router();

publicRouter.get("/locations", getTowns);
publicRouter.get("/search", search);
publicRouter.get("/pharmacy/:pharmacyId", pharmacyDetails);

export default publicRouter;

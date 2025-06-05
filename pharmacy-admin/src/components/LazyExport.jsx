import { lazy } from "react";

const RegisterPharmacy = lazy(() => import("../pages/RegisterPharmacy"));
const AddMedication = lazy(() => import("../pages/AddMedication"));
const Medicaions = lazy(() => import("../pages/Medicaions"));
const OnCall = lazy(() => import("../pages/OnCall"));
const WorkingDays = lazy(() => import("../pages/WorkingDays"));
const Profile = lazy(() => import("../pages/Profile"));
const DashboadHome = lazy(() => import("../pages/DashboadHome"));
const UpdateWorkingDay = lazy(() => import("./UpdateWorkingDay"));
const UpdateCallDays = lazy(() => import("./UpdateCallDays"));

export {
  RegisterPharmacy,
  AddMedication,
  Medicaions,
  OnCall,
  Profile,
  WorkingDays,
  DashboadHome,
  UpdateWorkingDay,
  UpdateCallDays
};

import { lazy } from "react";

const SelectPreferences = lazy(() => import('../pages/SelectPreferences'))
const PharmacyList = lazy(() => import('../pages/PharmacyList'))
const PharmacyDetails = lazy(() => import('../pages/PharmacyDetails'));
const WorkingDays = lazy(() => import('../components/WorkingDays'))
const SemiAuthPharmacy = lazy(() => import('../pages/SemiAuthPharmacy'))


export {
    SelectPreferences,
    PharmacyList,
    WorkingDays,
    PharmacyDetails,
    SemiAuthPharmacy
}
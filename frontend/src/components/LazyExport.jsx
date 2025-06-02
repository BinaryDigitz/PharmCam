import { lazy } from "react";

const SelectPreferences = lazy(() => import('../pages/SelectPreferences'))
const PharmacyList = lazy(() => import('../pages/PharmacyList'))


export {
    SelectPreferences,
    PharmacyList
}
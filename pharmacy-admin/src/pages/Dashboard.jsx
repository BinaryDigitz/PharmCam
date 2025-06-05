import React from "react";

import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import { DashboardSidebar } from "../components/exportComp";
import {
  DashboadHome,
  AddMedication,
  Medicaions,
  WorkingDays,
  OnCall,
  Profile,
} from "../components/LazyExport";

function Dashboard() {
  return (
    <div className="h-full lg:flex mx-auto pl-3 overflow-auto">
      <DashboardSidebar />
      <div className=" w-full flex-1 bg-greem-50/20">
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<DashboadHome />} />
            <Route path="/add-drug" element={<AddMedication />} />
            <Route path="/medications" element={<Medicaions />} />
            <Route path="/working-days" element={<WorkingDays />} />
            <Route path="/on-call" element={<OnCall />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

export default Dashboard;

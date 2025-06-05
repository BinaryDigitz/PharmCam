import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Loading, Navbar, Footer, Login, Dashboard } from "./components/exportComp";
import './App.css'
import { RegisterPharmacy, AddMedication, Medicaions, OnCall, Profile, WorkingDays } from "./components/LazyExport";

function App() {
  return (
    <div className="h-screen container bg-gradien-to-br from-green-100 to-green-50 ">
      <header className="">
        <Navbar />
      </header>
      <main className=" ">
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/register-pharmacy" element={<RegisterPharmacy />} />

        
            <Route path="/dashboard/*" element={<Dashboard />} />
           
          </Routes>
        </Suspense>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

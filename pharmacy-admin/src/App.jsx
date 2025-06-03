import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Loading, Navbar, Footer, Login } from "./components/exportComp";
import './App.css'
import { RegisterPharmacy } from "./components/LazyExport";

function App() {
  return (
    <div className="h-screen overflow-hidde container">
      <header>
        <Navbar />
      </header>
      <main className=" ">
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register-pharmacy" element={<RegisterPharmacy />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

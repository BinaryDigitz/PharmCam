import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Navbar,
  Footer,
  Loading,
} from "./components/exportComp.js";
import { SelectPreferences, PharmacyList } from "./components/LazyExport.jsx";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/select-preference" element={<SelectPreferences />} />
            <Route path="/pharmacy-list" element={<PharmacyList />} />
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

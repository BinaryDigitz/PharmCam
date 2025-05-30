import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Navbar, Footer } from "./components/exportComp.js";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

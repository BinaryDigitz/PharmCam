import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Loading, Navbar, Footer, Login } from "./components/exportComp";

function App() {
  return (
    <div className="h-full overflow-hidde">
      <header>
        <Navbar />
      </header>
      <main className=" h-[77dvh] lg:h-[75dvh] 2xl:h-[80dvh]">
        <ToastContainer />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
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

import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function HeroCTA() {
  const { isLoggedin, navigate } = useContext(AppContext);
   const pharmacy_url = import.meta.env.VITE_PHARMACY_FRONTEND_URL;
  return (
    <div className="mt-8">
      {!isLoggedin ? (
        <button
          onClick={() => navigate("/login")}
          title="Login page"
          className="bg-black text-green-50 px-6 montserrat rounded py-3 cursor-pointer hover:bg-black/80 trans"
        >
          Login / Create account
        </button>
      ) : (
        <button
          onClick={() => navigate("/dashboard")}
          title="Go to home page"
          className="bg-black text-green-50 px-6 montserrat rounded py-3 cursor-pointer hover:bg-black/80 trans"
        >
          Get started
        </button>
      )}
      <a target="blank"
          href={pharmacy_url}
          title="Search medication"
          className="border ml-4 px-6 montserrat rounded py-3 cursor-pointer hover:bg-black/10 trans"
        >
          Pharmacy / Drugs
        </a>
    </div>
  );
}

export default HeroCTA;

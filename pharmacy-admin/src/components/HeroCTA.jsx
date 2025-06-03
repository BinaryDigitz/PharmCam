import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function HeroCTA() {
  const { isLoggedin, navigate } = useContext(AppContext);
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
          onClick={() => navigate("/dashboad")}
          title="Go to home page"
          className="bg-black text-green-50 px-6 montserrat rounded py-3 cursor-pointer hover:bg-black/80 trans"
        >
          Get started
        </button>
      )}
    </div>
  );
}

export default HeroCTA;

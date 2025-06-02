import React from "react";
import { Link } from "react-router-dom";

function HeroCTA() {
  return (
    <div className="flex flex-co md:flex-row gap-4 text-sm ">
      <Link to="/semi-auth-pharmacy" className="flex items-center mt-8 ">
        <button 
        title="Pharmacy dashboad"
        className="border border-black text-green-950 montserrat px-6 py-3 shadow-green-400/20 shadow-lg md:hover:scale-x-105 trans rounded cursor-pointer">
          Own a Pharmacy?
        </button>
      </Link>
      <Link to="/select-preference" className="flex items-center mt-8 ">
        <button
        title="Search medication & pharmacy"
         className="bg-black montserrat text-green-200 px-8 py-3 shadow-green-400/20 shadow-lg md:hover:scale-x-105 trans rounded cursor-pointer">
          Get started
        </button>
      </Link>
    </div>
  );
}

export default HeroCTA;

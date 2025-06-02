import React from "react";
import { Link } from "react-router-dom";

function HeroCTA() {
  return (
    <Link to="/select-preference" className="flex items-center mt-8 ">
      <button className="bg-black montserrat text-green-200 px-8 py-3 shadow-green-400/20 shadow-lg hover:scale-x-105 trans rounded cursor-pointer">
        Get started
      </button>
    </Link>
  );
}

export default HeroCTA;

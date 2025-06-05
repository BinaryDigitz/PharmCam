import React from "react";
import { placeholder_img, uk_flag } from "../assets/assets";

function DashboadHome() {
  const isOpen = true;
  return (
    <section className="w-full flex justify-center items-center h-full">
      <div>
        <img
          src={uk_flag}
          width={100}
          alt={placeholder_img}
          className="mx-auto mb-4"
        />
        <p className="montserrat font-bold text-lg lg:text-xl text-center">
          MERCY PHARMACY
        </p>
        <h2 className="text-center">Welcome to your dashboard.</h2>
        <article>
          {!isOpen ? (
            <div className="bg-slate-200 rounded-lg p-8 w-sm mt-8">
              <p className="text-red-700 text-center">Currently Closed</p>
              <button className="bg-green-800 text-green-200 px-4 flex mx-auto py-3 mt-2 rounded cursor-pointer hover:bg-green-700">
                Open Pharmacy
              </button>
            </div>
          ) : (
            <div className="bg-slate-200 rounded-lg p-8 w-sm mt-8">
              <p className="text-green-700 text-center">Currently Open</p>
              <button className="bg-gray-800 text-gray-200 px-4 flex mx-auto py-3 mt-2 rounded cursor-pointer hover:bg-gray-700">
                Close Pharmacy
              </button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default DashboadHome;

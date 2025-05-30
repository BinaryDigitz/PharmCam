'use client'
import React, { useState } from "react";
import { cities } from "../assets/assets";

function CityFilter() {
  const [ selectedCity, setSelectedCity ] =  useState('Bamenda')


    function handleSelectedCity(city){
        setSelectedCity(city)
    }
  return (
    <section className="grid place-items-center mt-4 lg:scrollbar-hidden w-sm md:w-lg lg:w-4xl bg-green-900/20 overflow-x-scroll">
      <div className=" bg-gray-10 mx-auto rounded p-2.5 flex gap-4 ">
        {cities.map((city) => (
          <button 
          onClick={() => handleSelectedCity(city)}
          title={`Pharmacies in ${city}`}
          className={`py-2 cursor-pointer px-4 text-sm rounded  ${selectedCity === city ? 'bg-green-700 text-green-200' : 'bg-black/30 text-green-100'} lg:hover:bg-green-700 trans`}>{city}</button>
        ))}
      </div>
    </section>
  );
}

export default CityFilter;

import React, { useState } from "react";
import Title from "../components/Title";
import { UpdateDrug } from "../components/LazyExport";
import { add, placeholder_img, remove } from "../assets/assets";

function Medicaions() {
  const drugs = [
    {
      id: 1,
      tradeName: "Efferalgan",
      genericName: "Paracetamol",
      dosageStrength: "500mg",
      dosageForm: "Tablet",
    },
    {
      id: 2,
      tradeName: "Efferalgan",
      genericName: "Paracetamol",
      dosageStrength: "500mg",
      dosageForm: "Tablet",
    },
    {
      id: 3,
      tradeName: "Efferalgan",
      genericName: "Paracetamol",
      dosageStrength: "500mg",
      dosageForm: "Tablet",
    },
    {
      id: 4,
      tradeName: "Efferalgan",
      genericName: "Paracetamol",
      dosageStrength: "500mg",
      dosageForm: "Tablet",
    },
  ];
  const [showDrugForm, setShowDrugForm] = useState(false);
  return (
    <div className="mx-auto max-w-lg lg:mt-8 relative">
      <Title text1={""} text2={"Medications"} />
      <button
        onClick={() => setShowDrugForm(true)}
        className="border flex gap-2 justify-center items-center my-4 rounded px-4 py-3 cursor-pointer hover:bg-gray-100"
      >
        <img src={add} width={25} loading="lazy" alt={placeholder_img} />
        Add Drug
      </button>
      <div className="min-w-sm lg:w-lg mx-auto mt-4 border p-4 rounded border-gray-300 text-sm">
        {drugs.map((drug) => (
          <article
            key={drug.id}
            className="grid grid-cols-4 min-w-sm  max-w-lg my-2 p-2 gap-4 rounded bg-gray-100"
          >
            <p className="flex flex-col">
              <span className="text-gray-500 text-nowrap">Trade name</span>
              <span className="text-pink-500">{drug.tradeName}</span>
            </p>
            <p className="flex flex-col">
              <span className="text-gray-500 text-nowrap">Name</span>
              <span className="text-green-500">{drug.genericName}</span>
            </p>
            <p className="flex flex-col">
              <span className="text-gray-500 text-nowrap">Strength</span>
              <span>{drug.dosageStrength}</span>
            </p>
            <p className="flex flex-col text-nowrap">
              <span className="text-gray-500">Form</span>
              <span>{drug.dosageForm}</span>
            </p>
            <button className="py-2 flex gap-2 px-4 border cursor-pointer rounded text-gray-800 items-center justify-center hover:bg-red-100 hover:text-red-500">
               <img src={remove} width={20} loading="lazy" alt={placeholder_img} />
              Remove</button>
          </article>
        ))}
      </div>
      <div className={showDrugForm ? 'fixed inset-0 bg-black/60 backdrop-blur-sm ' : 'hidden'}>
        <UpdateDrug setShowDrugForm={setShowDrugForm}/>
      </div>
    </div>
  );
}

export default Medicaions;

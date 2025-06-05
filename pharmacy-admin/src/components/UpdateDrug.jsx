import React, { useState } from "react";

function UpdateDrug({ setShowDrugForm }) {
  const [formData, setFormData] = useState({
    tradeName: "",
    genericName: "",
    dosageStrength: "",
    dosageForm: "",
    price: "",
  });
    async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <section className="grid place-content-center h-full text-white">
      <div className="border p-4 rounded min-w-sm max-w-lg relative bg-gray-100 text-black">
        <button
          onClick={() => setShowDrugForm(false)}
          className="absolute top-2 right-2 bg-slate-200 p-2 px-3 cursor-pointer hover:bg-slate-300 trans rounded"
        >
          X
        </button>
        <form
        onSubmit={handleSubmit}
         className="mt-8 w-sm">
          <lable htmlFor="tradeName" className="block">
            Trade name{" "}
            <span className="ml-2 text-sm text-gray-500">(Optional)</span>
          </lable>
          <input
            type="text"
            value={formData.tradeName}
            onChange={(e) =>
              setFormData({ ...formData, tradeName: e.target.value })
            }
            className="w-full border border-gray-400 py-3 px-3 rounded mt-1"
            placeholder="Efferalgan"
          />

          <lable htmlFor="tradeName" className="block mt-4">
            Generic name
          </lable>
          <input
            type="text"
            required
            value={formData.genericName}
            onChange={(e) =>
              setFormData({ ...formData, genericName: e.target.value })
            }
            className="w-full border border-gray-400 py-3 px-3 rounded mt-1"
            placeholder="Paracetmol"
          />
          <div className="flex gap-2 items-center mt-4">
            <div className="w-1/2">
              <lable htmlFor="dosageStrength" className="block">
                Dosage strength
              </lable>
              <input
                type="text"
                maxLength={10}
                required
                value={formData.dosageStrength}
                onChange={(e) =>
                  setFormData({ ...formData, dosageStrength: e.target.value })
                }
                className="w-full border border-gray-400 py-3 px-3 rounded mt-1"
                placeholder="500mg"
              />
            </div>
            <div className="w-1/2">
              <lable htmlFor="dosageForm" className="block">
                Dosage form
              </lable>
              <input
                type="text"
                required
                maxLength={20}
                value={formData.dosageForm}
                onChange={(e) =>
                  setFormData({ ...formData, dosageForm: e.target.value })
                }
                className="w-full border border-gray-400 py-3 px-3 rounded mt-1"
                placeholder="Tablet"
              />
            </div>
          </div>
          <lable htmlFor="price" className="block mt-4">
            Price
          </lable>
          <input
            type="text"
            required
            maxLength={6}
            value={formData.price}
            onChange={e => setFormData({...formData, price: e.target.value})}
            className="w-full border border-gray-400 py-3 px-3 rounded mt-1 "
            placeholder="2000"
          />
          <button className="bg-black text-white w-full rounded py-3 mt-8 mb-4 hover:bg-black/80 cursor-pointer">
            Add Drug
          </button>
        </form>
      </div>
    </section>
  );
}

export default UpdateDrug;

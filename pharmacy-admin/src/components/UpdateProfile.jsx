import React, { useState } from "react";
// import { cameroon } from "../assets/data";

function UpdateProfile({ setShowUpdate }) {
  //  const [selectedRegion, setRegion] = useState("");
  const [formData, setFormData] = useState({
    // pharmacyName: "",
    phoneNumber: "",
    emailAddress: "",
    pharmacistName: "",
    // region: "",
    // town: "",
  });
  //   const towns =
  //     selectedRegion && cameroon.find((item) => item.region === selectedRegion);

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }

async  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <div className="grid place-content-center h-full text-white">
      <div className="border p-4 rounded min-w-sm max-w-lg relative bg-gray-100 text-black">
        <button
          onClick={() => setShowUpdate(false)}
          className="absolute top-2 right-2 bg-slate-200 p-2 px-3 cursor-pointer hover:bg-slate-300 trans rounded"
        >
          X
        </button>

        {/* FORM.... */}
        <form
        onChange={handleSubmit}
         className="w-[85%] lg:w-sm border  border-green-900 shadow-green/70 shadow-xl rounded px-4 py-6 mx-auto mt-8">
          {/* <div className="flex flex-col mb-4">
                   <label htmlFor="pharmacyName">Pharmacy Name</label>
                   <input
                     type="text"
                     placeholder="Mercy pharmacy"
                     className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
                     required
                     id="pharmacyName"
                     autoComplete="pharmacy name"
                     value={formData.pharmacyName}
                     onChange={handleChange}
                   />
                 </div> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              placeholder="+237 673 737 232"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="phoneNumber"
              autoComplete="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="contact@pharmacy.com"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="emailAddress"
              autoComplete="email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="pharmacistName">Pharmacist Name</label>
            <input
              type="text"
              placeholder="Dr. John Doe"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="pharmacistName"
              autoComplete="fullName"
              value={formData.pharmacistName}
              onChange={handleChange}
            />
          </div>
          {/* <div className="flex flex-col mb-4">
                   <label htmlFor="region">Region</label>
                   <select
                     name="region"
                     id="region"
                     className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
                     required
                     autoComplete=" name"
                     value={formData.region}
                     onChange={(event) => {
                       setFormData({ ...formData, region: event.target.value });
                       setRegion(event.target.value);
                     }}
                   >
                     <option value="">Please select region</option>
                     {cameroon &&
                       cameroon.map((item) => (
                         <option value={item.region} key={item.region}>
                           {item.region}
                         </option>
                       ))}
                   </select>
                 </div> */}
          {/* <div
                   className={` ${
                     !selectedRegion ? "opacity-40" : ""
                   }flex flex-col mb-4`}
                 >
                   <label htmlFor="town">Town</label>
                   <select
                     disabled={!selectedRegion}
                     name="town"
                     id="town"
                     className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
                     required
                     autoComplete=" name"
                     value={formData.town}
                     onChange={handleChange}
                   >
                     <option value="">Please select town</option>
                     {towns &&
                       towns.towns.map((item) => (
                         <option value={item} key={item}>
                           {item}
                         </option>
                       ))}
                   </select>
                 </div> */}
          <button className="bg-black mt-4 hover:bg-black/80 trans w-full text-green-50 py-3 rounded cursor-pointer">
            Update account
          </button>
          <p className="text-sm text-red-500 text-center mt-2 h-4">{"error"}</p>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;

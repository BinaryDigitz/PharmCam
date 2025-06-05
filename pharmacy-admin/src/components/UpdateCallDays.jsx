import React, { useState} from 'react'

function UpdateCallDays({setShowCallForm}) {
  const [formData, setFormData] = useState({
     day: "",
     callDate: "",
     
   });
 
   async function handleSubmit(event) {
     event.preventDefault();
     console.log(formData);
   }
   return (
     <div className="grid place-content-center h-full text-white">
       <div className="border p-4 rounded min-w-sm max-w-lg relative bg-gray-100 text-black">
         <button
           onClick={() => setShowCallForm(false)}
           className="absolute top-2 right-2 bg-slate-200 p-2 px-3 cursor-pointer hover:bg-slate-300 trans rounded"
         >
           X
         </button>
         <form onSubmit={handleSubmit} className="mt-8">
           <label htmlFor="day" className="block ml-0.5">
             Day
           </label>
           <select
             required
             value={formData.day}
             onChange={(e) => setFormData({ ...formData, day: e.target.value })}
             name="day"
             id="day"
             className="border border-gray-400 w-92 cursor-pointer py-3 px-2 rounded mt-1"
           >
             <option value="">Please select day</option>
             <option value="MON">Monday</option>
             <option value="TUE">Tuesday</option>
             <option value="WED">Wednesday</option>
             <option value="THU">Thursday</option>
             <option value="FRI">Friday</option>
             <option value="SAT">Saturday</option>
             <option value="SUN">Sunday</option>
           </select>
           <div className="flex gap-4 my-4">
             <div className="w-full">
               <label htmlFor="callDate" className="block">
                 Date
               </label>
               <input
                 type="date"
                 required
                 value={formData.callDate}
                 onChange={(e) =>
                   setFormData({ ...formData, callDate: e.target.value })
                 }
                 className=" border rounded w-full border-gray-400 py-3 px-2 mt-1"
               />
             </div>
             
           </div>
           <button
             type="submit"
             className="w-full bg-black hover:bg-black/80 text-white py-3 rounded my-4 cursor-pointer"
           >
             Update call date
           </button>
         </form>
       </div>
     </div>
   );
}

export default UpdateCallDays

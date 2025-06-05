import React, { useState } from "react";
import { UpdateWorkingDay } from "../components/LazyExport";
import { Title } from '../components/exportComp'
import { placeholder_img, add } from "../assets/assets";

function WorkingDays() {
  const [ showWorkingdayForm, setShowWorkingdayForm ] = useState(false)
  const workingDays = [
    {
      day: "Monday",
      date: 24,
      isWorkingDay: true,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: false,
    },
    {
      day: "Tuesday",
      date: 24,
      isWorkingDay: true,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: false,
    },
    {
      day: "Wednesday",
      date: 24,
      isWorkingDay: true,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: true,
    },
    {
      day: "Thursday",
      date: 24,
      isWorkingDay: true,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: false,
    },
    {
      day: "Friday",
      date: 24,
      isWorkingDay: true,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: false,
    },
    {
      day: "Saturday",
      date: 24,
      isWorkingDay: false,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: true,
    },
    {
      day: "Sunday",
      date: 24,
      isWorkingDay: false,
      openingTime: "08:00",
      closingTime: "19:00",
      onCall: false,
    },
  ];
  return (
    <div className="mx-auto max-w-lg lg:mt-8 relative">
      <Title text1={'Update'} text2={'Days'}/>
      <button 
      onClick={() => setShowWorkingdayForm(true)}
      className="my-4 border rounded px-4 py-3 cursor-pointer hover:bg-gray-100 flex items-center gap-2">
        <img src={add} width={20} loading="lazy" alt={placeholder_img} />
        Update Working day</button>
      <div className="border rounded p-2 border-gray-300">
        {workingDays.map((day) => (
          <article
            className={`grid grid-cols-5 p-2 bg-gray-100 min-w-sm max-w-lg ${
              !day.isWorkingDay ? "bg-red-100" : "bg-gray-100 hover:bg-gray-200"
            }  trans rounded my-2 gap-4 items-center`}
          >
            <p aria-label="date">{day.date}</p>
            <p aria-label="day">{day.day}</p>
            <div className="flex flex-col">
              {day.isWorkingDay ? (
                <p className="flex flex-col">
                  <span className="text-sm text-gray-500 text-nowrap">
                    Opening
                  </span>
                  <span aria-label="Opening time" className="text-sm">
                    {day.openingTime}
                  </span>
                </p>
              ) : (
                <span>Closed</span>
              )}
            </div>
            <div className="flex flex-col">
              {day.isWorkingDay ? (
                <p className="flex flex-col">
                  <span className="text-sm text-red-500 text-nowrap">
                    Closing
                  </span>
                  <span aria-label="Closing time" className="text-sm">
                    {day.closingTime}
                  </span>
                </p>
              ) : (
                <span className="p-2">Closed</span>
              )}
            </div>
            <p>
              {day.onCall && <span className="text-green-700">On Call</span>}
            </p>
          </article>
        ))}
      </div>
      <div className={showWorkingdayForm ? 'fixed inset-0 bg-black/60 backdrop-blur-sm ' : 'hidden'}>
        <UpdateWorkingDay setShowWorkingdayForm={setShowWorkingdayForm}/>
      </div>
    </div>
  );
}

export default WorkingDays;

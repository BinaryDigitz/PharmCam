import React from "react";
import { workingDays } from "../assets/assets";

function WorkingDays() {
  const days = [];
  function getNext7Days() {
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + 1);
      days.push({
        fullDate: date.toDateString(),
        dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
      });
    }
    return days;
  }
  getNext7Days();
  return (
    <div className="flex flex-col gap-2 h-full ">
      {workingDays.map((day) => (
        <article
          key={day.day}
          className="flex gap-6 bg-gray-400/10 hover:bg-gray-400/20 py-2 px-4 items-center rounded "
        >
          <p className="w-24 ">{day.day} </p>
          <div className="flex flex-col text-sm">
            <span className="text-gray-600">Opening</span>
            <span>{day.openTime}</span>
          </div>
          <div className="flex flex-col text-sm">
            <span className="text-gray-600">Closing</span>
            <span>{day.closeTime}</span>
          </div>
          <div className="flex flex-col text-sm">
            <p className="text-green-600 font-bold">On call</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default WorkingDays;

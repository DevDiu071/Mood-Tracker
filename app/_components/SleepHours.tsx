import Image from "next/image";
import React from "react";

function SleepHours() {
  const hours = [
    "9+ hours",
    "7-8 hours",
    " 5-6 hours",
    "  3-4 hours",
    "0-2 hours",
  ];
  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-bold my-[24px]">
        How was your mood today?
      </h1>
      {hours.map((hour, index) => (
        <div
          key={index}
          className="flex items-center border border-mood-bg mb-3 py-[12px] rounded-[10px] px-[20px] gap-x-4"
        >
          <input
            type="radio"
            id={hour}
            name="mood"
            value={hour}
            className="w-5 h-5 accent-blue"
          />
          <label htmlFor={hour} className="text-[20px] font-semibold">
            {hour}
          </label>
        </div>
      ))}
    </div>
  );
}

export default SleepHours;

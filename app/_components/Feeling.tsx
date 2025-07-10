import Image from "next/image";
import React from "react";

function Feeling() {
  const feelings = [
    "Joyful",
    "Down",
    "Anxious",
    "Calm",
    "Excited",
    "Frustrated",
    "Lonely",
    "Grateful",
    "Overwhelmed",
    "Motivated",
    "Irritable",
    "Peaceful",
    "Tired",
    "Hopeful",
    "Confident",
    "Stressed",
    "Content",
    "Disappointed",
    "Optimistic",
    "Restless",
  ];
  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-bold my-[24px]">
        How did you feel?
      </h1>
      <div className="flex flex-wrap gap-x-4">
        {feelings.map((feeling, index) => (
          <div
            key={index}
            className="flex items-center border border-mood-bg mb-3 py-[16.5px] rounded-[10px] px-[16px] gap-x-[4.5px]"
          >
            <input
              type="checkbox"
              id={feeling}
              name="feeling"
              value={feeling}
              className="w-4 h-4 border-2 checked:border-white checked:bg-blue-500 mb-[2px] appearance-none border-mood-bg rounded-[4px] accent-blue"
            />
            <label htmlFor={feeling} className="text-[18px] font-semibold">
              {feeling}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feeling;

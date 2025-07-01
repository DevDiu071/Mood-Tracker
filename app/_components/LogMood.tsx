import Image from "next/image";
import React from "react";

function LogMood() {
  const moods = ["Very Happy", "Happy", "Neutral", "Sad", "Very Sad"];
  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-bold my-[24px]">
        How was your mood today?
      </h1>
      {moods.map((mood, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-mood-bg mb-3 py-[12px] rounded-[10px] px-[20px] gap-x-4"
        >
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              id={mood}
              name="mood"
              value={mood}
              className="w-5 h-5 accent-blue"
            />
            <label htmlFor={mood} className="text-[20px] font-semibold">
              {mood}
            </label>
          </div>
          <Image
            src={`/assets/images/icon-${mood
              .toLowerCase()
              .replace(" ", "-")}-color.svg`}
            alt={mood}
            width={38}
            height={38}
            className="w-[38px] h-[38px"
          />
        </div>
      ))}
      <button
        type="button"
        className="text-5 flex flex-col w-full justify-center mx-auto mt-[32px] rounded-[10px] cursor-pointer bg-blue text-white py-4 px-[32px] font-semibold"
      >
        Continue
      </button>
    </div>
  );
}

export default LogMood;

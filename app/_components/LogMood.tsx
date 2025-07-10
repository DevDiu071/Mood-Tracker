"use client";

import Image from "next/image";
import React from "react";
import { useMood } from "../_providers/MoodProvider";
import clsx from "clsx";

function LogMood() {
  const { selectedMood, setSelectedMood } = useMood();
  const moods = ["Very Happy", "Happy", "Neutral", "Sad", "Very Sad"];
  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-bold my-[24px]">
        How was your mood today?
      </h1>
      {moods.map((mood, index) => (
        <div
          onClick={() => setSelectedMood(mood)}
          key={index}
          className={clsx(
            "flex items-center justify-between cursor-pointer border-[2px] border-mood-bg mb-3 py-[12px] rounded-[10px] px-[20px] gap-x-4",
            { "!border-blue-600": selectedMood === moods[index] }
          )}
        >
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              id={mood}
              name="mood"
              value={mood}
              onChange={() => setSelectedMood(mood)}
              checked={selectedMood === moods[index]}
              className={clsx(
                "w-5 appearance-none border-2 border-mood-bg rounded-full h-5 accent-blue",
                { "border-5 !border-blue-600": selectedMood === moods[index] }
              )}
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
    </div>
  );
}

export default LogMood;

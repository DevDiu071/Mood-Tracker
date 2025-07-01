"use client";

import React from "react";
import LogMood from "./LogMood";
import { useMood } from "../_providers/MoodProvider";

function LogMoodContainer() {
  const { logMoodIsOpen, setLogMoodIsOpen } = useMood();

  return (
    logMoodIsOpen && (
      <div
        onClick={() => setLogMoodIsOpen(false)}
        className=" absolute top-[405px] z-50 left-1/2 transform -translate-x-1/2 w-[88vw] sm:w-[600px] -translate-y-1/2 py-[32px] sm:py-[40px] px-[20px] sm:px-[40px] bg-white rounded-[16px]"
      >
        <div className="absolute right-[30px] cursor-pointer top-[30px] text-xl font-bold">
          x
        </div>
        <h1 className="text-[32px] sm:text-[40px] font-bold mb-[32px]">
          Log your Mood
        </h1>
        <div className="flex items-center gap-x-5 w-full">
          <div className="w-[70.75px] sm:w-[118px] h-[6px] rounded-md bg-blue"></div>
          <div className="w-[70.75px] sm:w-[118px] h-[6px] rounded-md bg-blue"></div>
          <div className="w-[70.75px] sm:w-[118px] h-[6px] rounded-md bg-blue"></div>
          <div className="w-[70.75px] sm:w-[118px] h-[6px] rounded-md bg-blue"></div>
        </div>
        <LogMood />
      </div>
    )
  );
}

export default LogMoodContainer;

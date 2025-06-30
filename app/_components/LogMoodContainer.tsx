import React from "react";
import LogMood from "./LogMood";

function LogMoodContainer() {
  return (
    <div className=" absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[350px] -translate-y-1/2 py-[32px] px-[20px] bg-white rounded-[16px]">
      <h1 className="text-[32px] font-bold mb-6">Log your Mood</h1>
      <div className="flex items-center gap-x-4 w-full">
        <div className="w-[61.75px] h-[6px] bg-blue"></div>
        <div className="w-[61.75px] h-[6px] bg-blue"></div>
        <div className="w-[61.75px] h-[6px] bg-blue"></div>
        <div className="w-[61.75px] h-[6px] bg-blue"></div>
      </div>
      <LogMood />
    </div>
  );
}

export default LogMoodContainer;

"use client";

import React from "react";
import Barchart from "./Barchart";
import LineChart from "./LineChart";

function MoodAndSleepStats() {
  return (
    <div className="bg-white border h-[408px] lg:h-auto mt-[32px] lg:mt-0 mb-[80px] lg:mb-0 border-mood-bg py-[32px] px-4 lg:px-[32px] rounded-[16px]">
      <h3 className="text-[28px] md:text-[32px] font-bold mb-5">
        Mood and Sleep Trends
      </h3>
      <Barchart />
    </div>
  );
}

export default MoodAndSleepStats;

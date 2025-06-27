import React from "react";
import AveragesContainer from "./AveragesContainer";
import MoodAndSleepStats from "./MoodAndSleepStats";

function DashBoard() {
  return (
    <div className="flex flex-col lg:mb-[80px] lg:grid lg:grid-cols-[370px_1fr]  lg:gap-x-[32px]">
      <AveragesContainer />
      <MoodAndSleepStats />
    </div>
  );
}

export default DashBoard;

import React from "react";

function AverageSleep() {
  return (
    <div>
      <p className="mb-[12px]">
        <span className="text-[22px] font-bold">Average Sleep</span>{" "}
        <span className="text-[16px]">(last 5 check-ins)</span>
      </p>
      <div className="bg-[url('/assets/images/bg-pattern-averages.svg)] py-[41.5px] px-4 md:px-5  bg-mood-bg rounded-[16px]">
        <h3 className="text-[24px] mb-[12px] font-bold">
          Not enough data yet!
        </h3>
        <p className="text-[15px] text-gray-500">
          Track 5 nights to view average sleep
        </p>
      </div>
    </div>
  );
}

export default AverageSleep;

import React from "react";

function AverageMood() {
  return (
    <div>
      <p className="mb-[12px]">
        <span className="text-[22px] font-bold">Average Mood</span>{" "}
        <span className="text-[16px]">(last 5 check-ins)</span>
      </p>
      <div className="bg-[url('/assets/images/bg-pattern-averages.svg)] py-[41.5px] px-4 md:px-5 bg-mood-bg rounded-[16px]">
        <h3 className="text-[24px] font-bold mb-[12px]">Keep tracking</h3>
        <p className="text-[15px] text-gray-500">
          Log 5 check-ins to see your average mood
        </p>
      </div>
    </div>
  );
}

export default AverageMood;

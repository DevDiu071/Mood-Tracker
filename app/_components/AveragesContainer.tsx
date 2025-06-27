import React from "react";
import AverageMood from "./AverageMood";
import AverageSleep from "./AverageSleep";

function AveragesContainer() {
  return (
    <div className="bg-white lg:h-auto border flex flex-col gap-y-6 border-mood-bg py-5 lg:py-6 px-4 lg:px-6 rounded-[16px]">
      <AverageMood />
      <AverageSleep />
    </div>
  );
}

export default AveragesContainer;

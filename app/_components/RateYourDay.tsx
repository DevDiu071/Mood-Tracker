import React from "react";

function RateYourDay() {
  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-bold my-[24px]">
        Write about your day
      </h1>
      <textarea
        rows={5}
        className="w-full resize-none border border-textbox-color rounded-[10px]"
      ></textarea>
    </div>
  );
}

export default RateYourDay;

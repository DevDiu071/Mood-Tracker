import React from "react";

function Button() {
  return (
    <button
      type="button"
      className="text-5 flex flex-col justify-center mx-auto mt-[48px] mb-[64px] rounded-[10px] cursor-pointer bg-blue text-white py-4 px-[32px] font-semibold"
    >
      Log today's mood
    </button>
  );
}

export default Button;

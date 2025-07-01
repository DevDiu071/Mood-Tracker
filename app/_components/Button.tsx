"use client";

import React from "react";
import { useMood } from "../_providers/MoodProvider";

function Button() {
  const { setLogMoodIsOpen } = useMood();
  return (
    <button
      onClick={() => setLogMoodIsOpen(true)}
      type="button"
      className="text-5 flex flex-col justify-center mx-auto mt-[48px] mb-[64px] rounded-[10px] cursor-pointer bg-blue text-white py-4 px-[32px] font-semibold"
    >
      Log today's mood
    </button>
  );
}

export default Button;

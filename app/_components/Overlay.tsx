"use client";

import React from "react";
import { useMood } from "../_providers/MoodProvider";

function Overlay() {
  const { logMoodIsOpen } = useMood();
  return (
    logMoodIsOpen && (
      <div className="absolute h-[1060px] w-full top-0 left-0 bg-bg-overlay opacity-70 z-40"></div>
    )
  );
}

export default Overlay;

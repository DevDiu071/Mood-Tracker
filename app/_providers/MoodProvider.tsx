"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { MoodTypes } from "../_types/MoodTypes";

const MoodContext = createContext<MoodTypes | undefined>(undefined);

function MoodProvider({ children }: { children: ReactNode }) {
  const [logMoodIsOpen, setLogMoodIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [selectedMood, setSelectedMood] = useState<string>("");
  return (
    <MoodContext.Provider
      value={{
        logMoodIsOpen,
        step,
        setStep,
        selectedMood,
        setSelectedMood,
        setLogMoodIsOpen,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
}

function useMood() {
  const context = useContext(MoodContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { MoodProvider, useMood };

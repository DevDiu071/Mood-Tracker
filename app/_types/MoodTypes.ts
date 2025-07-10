import { Dispatch, SetStateAction } from "react";

export interface MoodTypes {
  logMoodIsOpen: boolean;
  setLogMoodIsOpen: Dispatch<SetStateAction<boolean>>;
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
  setSelectedMood: Dispatch<SetStateAction<string>>;
  selectedMood: string;
}

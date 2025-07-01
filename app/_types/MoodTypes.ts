import { Dispatch, SetStateAction } from "react";

export interface MoodTypes {
  logMoodIsOpen: boolean;
  setLogMoodIsOpen: Dispatch<SetStateAction<boolean>>;
}

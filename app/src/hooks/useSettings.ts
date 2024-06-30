import { useContext } from "react";
import { SettingsContext } from "../contexts/Settings";

export function useSettings() {
  return useContext(SettingsContext);
}

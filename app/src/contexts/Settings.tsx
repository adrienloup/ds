import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SlotType } from "../models/Slot";
import style from "../scss/modes/dark.module.scss";

export const SettingsContext = createContext<{
  settings: { dir: string; mode: string; open: boolean };
  setSettings: (settings: { dir: string; mode: string; open: boolean }) => void;
}>({
  settings: { dir: "ltr", mode: "dark", open: false },
  setSettings: (settings: { dir: string; mode: string; open: boolean }) => {
    settings;
  },
});

export function SettingsProvider({ children }: SlotType) {
  const [settings, setSettings] = useLocalStorage("ds_y0y09_10_settings", {
    dir: "ltr",
    mode: "dark",
    open: false,
  });

  useEffect(() => {
    settings.mode === "dark"
      ? document.body.classList.add(`${style.dark}`)
      : document.body.classList.remove(`${style.dark}`);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

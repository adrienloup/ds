import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SlotType } from "../models/Slot";
import { DirectionType } from "../models/Direction";
import { ModeType } from "../models/Mode";
import { ColorType } from "../models/Color";
import style from "../scss/modes/dark.module.scss";

export const SettingsContext = createContext<{
  settings: {
    direction: DirectionType;
    mode: ModeType;
    color: ColorType;
    open: boolean;
  };
  setSettings: (settings: {
    direction: DirectionType;
    mode: ModeType;
    color: ColorType;
    open: boolean;
  }) => void;
}>({
  settings: { direction: "ltr", mode: "dark", color: "yellow", open: false },
  setSettings: (settings: {
    direction: DirectionType;
    mode: ModeType;
    color: ColorType;
    open: boolean;
  }) => {
    settings;
  },
});

export function SettingsProvider({ children }: SlotType) {
  const [settings, setSettings] = useLocalStorage("ds_y0y09_10_settings", {
    direction: "ltr" as DirectionType,
    mode: "dark" as ModeType,
    color: "yellow" as ColorType,
    open: false,
  });

  useEffect(() => {
    settings?.mode === "dark" ||
    (settings?.mode === "system" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? document.body.classList.add(`${style.dark}`)
      : document.body.classList.remove(`${style.dark}`);

    document.body.style.setProperty(
      "--color-primary",
      `var(--color-${settings?.color})`
    );

    document.body.style.setProperty(
      "--color-primary-darked",
      `var(--color-${settings?.color}-darked)`
    );

    const handleChange = (event: { matches: boolean }) =>
      settings?.mode === "dark" ||
      (settings?.mode === "system" && event.matches)
        ? document.body.classList.add(`${style.dark}`)
        : document.body.classList.remove(`${style.dark}`);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

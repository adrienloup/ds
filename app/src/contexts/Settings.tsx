import { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SlotType } from "../models/Slot";
import { ColorType } from "../models/Color";
import { DirectionType } from "../models/Direction";
import { LangType } from "../models/Lang";
import { ModeType } from "../models/Mode";
import darkStyles from "../scss/modes/dark.module.scss";
import contrastStyles from "../scss/modes/contrast.module.scss";

export const SettingsContext = createContext<{
  settings: {
    color: ColorType;
    direction: DirectionType;
    lang: LangType;
    mode: ModeType;
    open: boolean;
  };
  setSettings: (settings: {
    color: ColorType;
    direction: DirectionType;
    lang: LangType;
    mode: ModeType;
    open: boolean;
  }) => void;
}>({
  settings: {
    color: "yellow",
    direction: "ltr",
    lang: "en",
    mode: "dark",
    open: false,
  },
  setSettings: (settings: {
    color: ColorType;
    direction: DirectionType;
    lang: LangType;
    mode: ModeType;
    open: boolean;
  }) => {
    settings;
  },
});

export function SettingsProvider({ children }: SlotType) {
  const { i18n } = useTranslation();
  const [settings, setSettings] = useLocalStorage("ds_y0y09_10_settings", {
    color: "yellow" as ColorType,
    direction: "ltr" as DirectionType,
    lang: "en" as LangType,
    mode: "dark" as ModeType,
    open: false,
  });

  useEffect(() => {
    settings?.mode === "dark" ||
    (settings?.mode === "system" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? (document.body.classList.add(`${darkStyles.dark}`),
        document.body.classList.remove(`${contrastStyles.contrast}`))
      : settings?.mode === "contrast"
        ? (document.body.classList.add(`${contrastStyles.contrast}`),
          document.body.classList.remove(`${darkStyles.dark}`))
        : document.body.classList.remove(
            `${darkStyles.dark}`,
            `${contrastStyles.contrast}`
          );

    document.body.style.setProperty(
      "--color-primary",
      `var(--color-${settings?.color})`
    );

    document.body.style.setProperty(
      "--color-primary-darked",
      `var(--color-${settings?.color}-darked)`
    );

    i18n.changeLanguage(settings?.lang);

    const handleChange = (event: { matches: boolean }) =>
      settings?.mode === "dark" ||
      (settings?.mode === "system" && event.matches)
        ? (document.body.classList.add(`${darkStyles.dark}`),
          document.body.classList.remove(`${contrastStyles.contrast}`))
        : settings?.mode === "contrast"
          ? (document.body.classList.add(`${contrastStyles.contrast}`),
            document.body.classList.remove(`${darkStyles.dark}`))
          : document.body.classList.remove(
              `${darkStyles.dark}`,
              `${contrastStyles.contrast}`
            );

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

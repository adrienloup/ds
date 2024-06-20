import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../contexts/Settings";
import { SettingsType } from "../models/Settings";
import { useLocalStorage } from "./useLocalStorage";
import dark from "../scss/modes/dark.module.scss";

const LocalData = () => {
  const { dataSettings } = useContext<SettingsType>(SettingsContext);
  const { getItem } = useLocalStorage();
  return JSON.parse(getItem("_ds_y0y09_10_settings") as string) ?? dataSettings;
};

export const useSettings = () => {
  const [dataSettings, setDataSettings] = useState(LocalData());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10_settings", JSON.stringify(dataSettings));

    dataSettings.mode === "dark"
      ? document.body.classList.add(`${dark.dark}`)
      : document.body.classList.remove(`${dark.dark}`);
  }, [dataSettings, setDataSettings]);

  return { dataSettings, setDataSettings };
};

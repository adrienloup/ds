import { useContext, useEffect, useState } from "react";
import { SettingContext } from "../contexts/SettingContext";
import { SettingType } from "../models/Setting";
import { useLocalStorage } from "./useLocalStorage";
import dark from "../scss/modes/dark.module.scss";

const LocalData = () => {
  const { dataSettings } = useContext<SettingType>(SettingContext);
  const { getItem } = useLocalStorage();
  return JSON.parse(getItem("_ds_y0y09_10_setting") as string) ?? dataSettings;
};

export const useSetting = () => {
  const [dataSettings, setDataSetting] = useState(LocalData());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10_setting", JSON.stringify(dataSettings));

    dataSettings.mode === "dark"
      ? document.body.classList.add(`${dark.dark}`)
      : document.body.classList.remove(`${dark.dark}`);
  }, [dataSettings, setDataSetting]);

  return { dataSettings, setDataSetting };
};

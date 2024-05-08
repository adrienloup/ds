import { FC, useContext, useEffect, useState } from "react";
import { SettingContext } from "../contexts/Setting";
import { SlotType } from "../models/Slot";
import dark from "../scss/modes/dark.module.scss";

const Setting = () => {
  const { setting } = useContext(SettingContext);
  return JSON.parse(localStorage.getItem("ds_setting") as string) ?? setting;
};

export const SettingProvider: FC<SlotType> = ({ children }) => {
  const [setting, setSetting] = useState(Setting());

  useEffect(() => {
    localStorage.setItem("ds_setting", JSON.stringify(setting));
    setting.mode === "dark"
      ? document.body.classList.add(`${dark.dark}`)
      : document.body.classList.remove(`${dark.dark}`);
  }, [setting, setSetting]);

  return (
    <SettingContext.Provider value={{ setting, setSetting }}>
      {children}
    </SettingContext.Provider>
  );
};

import { useContext, useState } from "react";
import { SettingContext } from "../../contexts/SettingContext";
import { SettingType } from "../../models/Setting";
import { SlotType } from "../../models/Slot";
import { ToolBar } from "../ToolBar/ToolBar";
import { Settings } from "../Settings/Settings";
import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  console.log("Main");

  const { dataSettings, setDataSetting } =
    useContext<SettingType>(SettingContext);
  const [settings, setSettings] = useState(dataSettings.open);

  const handleSettings = (open: boolean) => {
    dataSettings.open = open;
    setDataSetting({ ...dataSettings });
    setSettings(open);
  };

  return (
    <main role="main" className={style.main}>
      <ToolBar onSettings={() => handleSettings(!settings)} />
      <Settings open={settings} onClick={() => handleSettings(false)} />
      <div className={style.inner}>{children}</div>
    </main>
  );
};

import { useContext, useState } from "react";
import { SettingsContext } from "../../contexts/Settings";
import { SettingsType } from "../../models/Settings";
import { SlotType } from "../../models/Slot";
import { ToolBar } from "../ToolBar/ToolBar";
import { Settings } from "../Settings/Settings";
import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  console.log("Main");

  const { dataSettings, setDataSettings } =
    useContext<SettingsType>(SettingsContext);
  const [settings, setSettings] = useState(dataSettings.open);

  const handleSettings = (open: boolean) => {
    dataSettings.open = open;
    setDataSettings({ ...dataSettings });
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

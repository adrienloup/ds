import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { DataType } from "../../models/Data";
import { SlotType } from "../../models/Slot";
import { ToolBar } from "../ToolBar/ToolBar";
import { Settings } from "../Settings/Settings";

import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  console.log("Main");

  const { data, setData } = useContext<DataType>(DataContext);
  const [settings, setSettings] = useState(data.settings.open);

  const handleSettings = (open: boolean) => {
    data.settings.open = open;
    setData({ ...data });
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

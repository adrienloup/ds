import { useContext, useState } from "react";
import { SettingsContext } from "../../contexts/Settings";
import { SettingsType } from "../../models/Settings";
import { Tools } from "../Tools/Tools";
import { Settings } from "../Settings/Settings";

export const ToolsBar = () => {
  console.log("ToolsBar");

  const { dataSettings, setDataSettings } =
    useContext<SettingsType>(SettingsContext);
  const [settings, setSettings] = useState(dataSettings.open);

  const handleSettings = (open: boolean) => {
    dataSettings.open = open;
    setDataSettings({ ...dataSettings });
    setSettings(open);
  };

  return (
    <>
      <Tools onSettings={() => handleSettings(!settings)} />
      <Settings open={settings} onClick={() => handleSettings(false)} />
    </>
  );
};

import { useContext, useState } from "react";
import { SettingsContext } from "../../contexts/Settings";
import { SettingsType } from "../../models/Settings";
import { Tools } from "../Tools/Tools";
import { Settings } from "../Settings/Settings";

export const ToolsBar = () => {
  console.log("ToolsBar");

  const { dataSettings, setDataSettings } =
    useContext<SettingsType>(SettingsContext);
  const [open, setOpen] = useState(dataSettings.open);

  const handleChangeSettings = (open: boolean) => {
    setDataSettings({ ...dataSettings, open });
    setOpen(open);
  };

  return (
    <>
      <Tools onSettings={() => handleChangeSettings(!open)} />
      <Settings open={open} onClick={() => handleChangeSettings(false)} />
    </>
  );
};

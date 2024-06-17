import { createContext } from "react";
import { SettingType } from "../models/Setting";
import { SlotType } from "../models/Slot";
import { useSetting } from "../hooks/useSetting";

export const SettingContext = createContext<SettingType>({
  dataSettings: {
    dir: "ltr",
    mode: "dark",
    open: false,
  },
  setDataSetting: (dataSettings: {
    dir: string;
    mode: string;
    open: boolean;
  }) => {
    dataSettings;
  },
});

export const SettingContextProvider = ({ children }: SlotType) => {
  const { dataSettings, setDataSetting } = useSetting();

  return (
    <SettingContext.Provider value={{ dataSettings, setDataSetting }}>
      {children}
    </SettingContext.Provider>
  );
};

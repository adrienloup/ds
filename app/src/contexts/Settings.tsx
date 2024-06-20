import { createContext } from "react";
import { SettingsType } from "../models/Settings";
import { SlotType } from "../models/Slot";
import { useSettings } from "../hooks/useSettings";

export const SettingsContext = createContext<SettingsType>({
  dataSettings: {
    dir: "ltr",
    mode: "dark",
    open: false,
  },
  setDataSettings: (dataSettings: {
    dir: string;
    mode: string;
    open: boolean;
  }) => {
    dataSettings;
  },
});

export const SettingsContextProvider = ({ children }: SlotType) => {
  const { dataSettings, setDataSettings } = useSettings();

  return (
    <SettingsContext.Provider value={{ dataSettings, setDataSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

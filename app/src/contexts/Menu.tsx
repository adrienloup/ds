import { createContext } from "react";
import { MenuType } from "../models/Menu";
import { SlotType } from "../models/Slot";
import { useMenu } from "../hooks/useMenu";

export const MenuContext = createContext<MenuType>({
  dataMenu: "",
  setDataMenu: (dataMenu: string) => {
    dataMenu;
  },
});

export const MenuContextProvider = ({ children }: SlotType) => {
  const { dataMenu, setDataMenu } = useMenu();

  return (
    <MenuContext.Provider value={{ dataMenu, setDataMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

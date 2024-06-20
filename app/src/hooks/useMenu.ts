import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../contexts/Menu";
import { MenuType } from "../models/Menu";
import { useLocalStorage } from "./useLocalStorage";

const LocalData = () => {
  const { dataMenu } = useContext<MenuType>(MenuContext);
  const { getItem } = useLocalStorage();
  return JSON.parse(getItem("_ds_y0y09_10_menu") as string) ?? dataMenu;
};

export const useMenu = () => {
  const [dataMenu, setDataMenu] = useState(LocalData());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10_menu", JSON.stringify(dataMenu));
  }, [dataMenu, setDataMenu]);

  return { dataMenu, setDataMenu };
};

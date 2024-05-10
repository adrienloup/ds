import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { useLocalStorage } from "./useLocalStorage";
import dark from "../scss/modes/dark.module.scss";

const LocalData = () => {
  const { data } = useContext(DataContext);
  const { getItem } = useLocalStorage();
  return JSON.parse(getItem("_ds_y0y09_10") as string) ?? data;
};

export const useData = () => {
  const [data, setData] = useState(LocalData());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10", JSON.stringify(data));

    data.settings.mode === "dark"
      ? document.body.classList.add(`${dark.dark}`)
      : document.body.classList.remove(`${dark.dark}`);
  }, [data, setData]);

  return { data, setData };
};

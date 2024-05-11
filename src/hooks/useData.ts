import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { DataType } from "../models/Data";
import { useLocalStorage } from "./useLocalStorage";
import dark from "../scss/modes/dark.module.scss";
import purple from "../scss/themes/purple.module.scss";

const LocalData = () => {
  const { data } = useContext<DataType>(DataContext);
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

    data.settings.theme === "purple"
      ? document.body.classList.add(`${purple.purple}`)
      : document.body.classList.remove(`${purple.purple}`);
  }, [data, setData]);

  return { data, setData };
};

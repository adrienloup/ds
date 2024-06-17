import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { DataType } from "../models/Data";
import { useLocalStorage } from "./useLocalStorage";

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
  }, [data, setData]);

  return { data, setData };
};

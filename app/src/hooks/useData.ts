import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import dark from "../scss/modes/dark.module.scss";

const LocalData = () => {
  const { getItem } = useLocalStorage();
  return (
    JSON.parse(getItem("_ds_y0y09_10") as string) ?? {
      typology: "",
      notifications: [
        { id: 1, title: "NPM package locally" },
        { id: 2, title: "Add another components" },
        { id: 3, title: "Make the mobile version" },
      ],
      settings: {
        open: false,
        dir: "ltr",
        mode: "light",
      },
      user: null,
    }
  );
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

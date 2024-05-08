import { createContext } from "react";

export const SettingContext = createContext({
  setting: {
    dir: "ltr",
    mode: "light",
    nav: "",
    theme: "purple",
    todo: [{ id: 1, label: "todo1" }],
  },
  setSetting: (setting: {
    dir: string;
    mode: string;
    nav: string;
    theme: string;
    todo: { id: number; label: string }[];
  }) => {
    setting;
  },
});

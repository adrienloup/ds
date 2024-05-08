import { createContext } from "react";

export const SettingContext = createContext({
  setting: {
    dir: "ltr",
    mode: "light",
    nav: "",
    theme: "purple",
    todo: ["todo1", "todo2"],
  },
  setSetting: (setting: {
    dir: string;
    mode: string;
    nav: string;
    theme: string;
    todo: string[];
  }) => {
    setting;
  },
});

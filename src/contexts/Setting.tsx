import { createContext } from "react";

export const SettingContext = createContext({
  setting: {
    dir: "ltr",
    mode: "light",
    nav: "",
    theme: "purple",
    todo: [{ id: 1, label: "Make the mobile version" }],
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

/*
  settings: {
    dir: "ltr",
    mode: "light",
    theme: "purple",
  },
  auth: {
    user: false,
    admin: false,
  }
  notifications: [{ id: 1, label: "The mobile version will be available soon }]
*/

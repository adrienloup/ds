import { createContext } from "react";
import { NotificationType } from "../models/Notification";
import { UserType } from "../models/User";
import { DataType } from "../models/Data";

export const DataContext = createContext<DataType>({
  data: {
    notifications: [
      { id: 1, label: "NPM package locally with npm link" },
      { id: 2, label: "Make the mobile version" },
    ],
    settings: {
      dir: "ltr",
      mode: "light",
      nav: "",
      theme: "purple",
    },
    user: null,
  },
  setData: (data: {
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      nav: string;
      theme: string;
    };
    user: UserType | null;
  }) => {
    data;
  },
});

import { createContext } from "react";
import { NotificationType } from "../models/Notification";
import { UserType } from "../models/User";
import { DataType } from "../models/Data";

export const DataContext = createContext<DataType>({
  data: {
    category: "",
    notifications: [
      { id: 1, title: "NPM package locally" },
      { id: 2, title: "Make the mobile version" },
    ],
    settings: {
      dir: "ltr",
      mode: "light",
      theme: "yellow",
    },
    user: null,
  },
  setData: (data: {
    category: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      theme: string;
    };
    user: UserType | null;
  }) => {
    data;
  },
});

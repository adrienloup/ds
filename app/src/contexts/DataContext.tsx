import { createContext } from "react";
import { NotificationType } from "../models/Notification";
import { UserType } from "../models/User";
import { DataType } from "../models/Data";

export const DataContext = createContext<DataType>({
  data: {
    typology: "",
    notifications: [
      { id: 1, title: "NPM package locally" },
      { id: 2, title: "Add another components" },
      { id: 3, title: "Make the mobile version" },
    ],
    settings: {
      dir: "ltr",
      mode: "light",
    },
    user: null,
  },
  setData: (data: {
    typology: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
    };
    user: UserType | null;
  }) => {
    data;
  },
});

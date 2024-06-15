import { createContext } from "react";
import { NotificationType } from "../models/Notification";
import { UserType } from "../models/User";
import { DataType } from "../models/Data";
import { SlotType } from "../models/Slot";
import { useData } from "../hooks/useData";

export const DataContext = createContext<DataType>({
  data: {
    category: "",
    notifications: [
      { id: 1, title: "NPM package locally" },
      { id: 2, title: "Add another components" },
      { id: 3, title: "Make the mobile version" },
    ],
    settings: {
      dir: "ltr",
      mode: "dark",
      open: false,
    },
    user: null,
  },
  setData: (data: {
    category: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      open: boolean;
    };
    user: UserType | null;
  }) => {
    data;
  },
});

export const DataContextProvider = ({ children }: SlotType) => {
  const { data, setData } = useData();

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

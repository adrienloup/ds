import { createContext } from "react";
import { UserType } from "../models/User";
import { DataType } from "../models/Data";
import { SlotType } from "../models/Slot";
import { useData } from "../hooks/useData";

export const DataContext = createContext<DataType>({
  data: {
    settings: {
      dir: "ltr",
      mode: "dark",
      open: false,
    },
    user: null,
  },
  setData: (data: {
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

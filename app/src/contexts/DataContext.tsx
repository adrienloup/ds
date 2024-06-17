import { createContext } from "react";
import { UserType } from "../models/User";
import { DataType } from "../models/Data";
import { SlotType } from "../models/Slot";
import { useData } from "../hooks/useData";

export const DataContext = createContext<DataType>({
  data: {
    user: null,
  },
  setData: (data: { user: UserType | null }) => {
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

import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { DataType } from "../models/Data";
import { UserType } from "../models/User";

export const useAuth = () => {
  const { data, setData } = useContext<DataType>(DataContext);
  const [user, setUser] = useState<UserType | null>(data.user);

  const login = (user: any) => {
    setData({ ...data, user: user });
    setUser(user);
  };

  const logout = () => {
    setData({ ...data, user: null });
    setUser(null);
  };

  return { user, login, logout };
};

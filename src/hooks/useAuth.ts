import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export const useAuth = () => {
  const { data, setData } = useContext(DataContext);
  const [user, setUser] = useState(data.user);

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

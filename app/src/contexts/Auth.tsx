import { createContext, useState } from "react";
import { SlotType } from "../models/Slot";

export const AuthContext = createContext<{
  user: { id: number; name: string };
  login: (user: { id: number; name: string }) => void;
  logout: () => void;
}>({
  user: { id: 0, name: "" },
  login: (user: { id: number; name: string }) => user,
  logout: () => {},
});

export const AuthProvider = ({ children }: SlotType) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
  });

  const login = (user: { id: number; name: string }) => {
    setUser({ id: user.id, name: user.name });
  };

  const logout = () => {
    setUser({ id: 0, name: "" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth";
import { AuthType } from "../models/Auth";
import { UserType } from "../models/User";

export const useUser = () => {
  const { dataAuth, setDataAuth } = useContext<AuthType>(AuthContext);
  const [user, setUser] = useState<UserType | null>(dataAuth.user);

  const login = (user: UserType | null) => {
    setDataAuth({ user: user });
    setUser(user);
  };

  const logout = () => {
    setDataAuth({ user: null });
    setUser(null);
  };

  return { user, login, logout };
};

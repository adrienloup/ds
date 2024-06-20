import { createContext } from "react";
import { UserType } from "../models/User";
import { AuthType } from "../models/Auth";
import { SlotType } from "../models/Slot";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext<AuthType>({
  dataAuth: {
    user: null,
  },
  setDataAuth: (dataAuth: { user: UserType | null }) => {
    dataAuth;
  },
});

export const AuthContextProvider = ({ children }: SlotType) => {
  const { dataAuth, setDataAuth } = useAuth();

  return (
    <AuthContext.Provider value={{ dataAuth, setDataAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

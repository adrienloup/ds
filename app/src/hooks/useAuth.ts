import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Auth";
import { AuthType } from "../models/Auth";
import { useLocalStorage } from "./useLocalStorage";

const data = () => {
  const { dataAuth } = useContext<AuthType>(AuthContext);
  const { getItem } = useLocalStorage();
  return JSON.parse(getItem("_ds_y0y09_10_auth") as string) ?? dataAuth;
};

export const useAuth = () => {
  const [dataAuth, setDataAuth] = useState(data());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10_auth", JSON.stringify(dataAuth));
  }, [dataAuth, setDataAuth]);

  return { dataAuth, setDataAuth };
};

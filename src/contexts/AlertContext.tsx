import { createContext } from "react";
import { AlertContextType } from "../models/Alert";

export const AlertContext = createContext<AlertContextType | null>(null);

import { createContext } from "react";
import { ErrorResponse } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { SlotType } from "../models/Slot";

export const NotificationsContext = createContext<{
  loading: boolean;
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  errors: ErrorResponse | null;
}>({
  loading: false,
  data: [{ userId: 0, id: 0, title: "", body: "" }],
  errors: {
    status: 0,
    statusText: "",
    data: undefined,
  },
});

export function NotificationsProvider({ children }: SlotType) {
  const { loading, data, errors } = useFetch<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>("https://jsonplaceholder.typicode.com/posts?_limit=3&delay=2000");

  return (
    <NotificationsContext.Provider value={{ loading, data, errors }}>
      {children}
    </NotificationsContext.Provider>
  );
}

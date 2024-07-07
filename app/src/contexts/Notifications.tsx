import { createContext } from "react";
import { ErrorResponse } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { SlotType } from "../models/Slot";

export const NotificationsContext = createContext<{
  loading: boolean;
  data: {
    id: number;
    title: string;
    body: string;
    label: string;
    url: string;
  }[];
  errors: ErrorResponse | null;
}>({
  loading: false,
  data: [{ id: 0, title: "", body: "", label: "", url: "" }],
  errors: {
    status: 0,
    statusText: "",
    data: undefined,
  },
});

export function NotificationsProvider({ children }: SlotType) {
  const { loading, data, errors } = useFetch<{
    id: number;
    title: string;
    body: string;
    label: string;
    url: string;
  }>("/ds/notifications.json");

  return (
    <NotificationsContext.Provider value={{ loading, data, errors }}>
      {children}
    </NotificationsContext.Provider>
  );
}

import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { SlotType } from "../models/Slot";

export const NotificationsContext = createContext<{
  loading: boolean;
  data: { id: number; title: string; body: string }[];
  errors: {
    status: number;
    statusText: string;
    data: undefined;
  };
}>({
  loading: false,
  data: [{ id: 0, title: "", body: "" }],
  errors: {
    status: 0,
    statusText: "",
    data: undefined,
  },
});

export function NotificationsProvider({ children }: SlotType) {
  const { loading, data, errors } = useFetch(
    "https://github.com/adrienloup/ds/blob/master/app/src/data/notifications.json"
  );

  return (
    <NotificationsContext.Provider value={{ loading, data, errors }}>
      {children}
    </NotificationsContext.Provider>
  );
}

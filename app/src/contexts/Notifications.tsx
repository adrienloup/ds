import { createContext } from "react";
import { NotificationsType, NotificationType } from "../models/Notifications";
import { SlotType } from "../models/Slot";
import { useNotifications } from "../hooks/useNotifications";

export const NotificationsContext = createContext<NotificationsType>({
  dataNotifications: [
    { id: 1, title: "NPM package locally" },
    { id: 2, title: "Add another components" },
    { id: 3, title: "Make the mobile version" },
  ],
  setDataNotifications: (dataNotifications: NotificationType[]) => {
    dataNotifications;
  },
});

export const NotificationsContextProvider = ({ children }: SlotType) => {
  const { dataNotifications, setDataNotifications } = useNotifications();

  return (
    <NotificationsContext.Provider
      value={{ dataNotifications, setDataNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

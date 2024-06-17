import { createContext } from "react";
import { NotificationType } from "../models/Notification";
import { NotificationsType } from "../models/Notification";
import { SlotType } from "../models/Slot";
import { useNotification } from "../hooks/useNotification";

export const NotificationContext = createContext<NotificationsType>({
  dataNotifications: [
    { id: 1, title: "NPM package locally" },
    { id: 2, title: "Add another components" },
    { id: 3, title: "Make the mobile version" },
  ],
  setDataNotification: (dataNotifications: NotificationType[]) => {
    dataNotifications;
  },
});

export const NotificationContextProvider = ({ children }: SlotType) => {
  const { dataNotifications, setDataNotification } = useNotification();

  return (
    <NotificationContext.Provider
      value={{ dataNotifications, setDataNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

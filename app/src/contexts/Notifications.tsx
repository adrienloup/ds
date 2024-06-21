import { createContext, useContext, useState } from "react";
import { NotificationsType, NotificationType } from "../models/Notifications";
import { SlotType } from "../models/Slot";

export const NotificationsContext = createContext<NotificationsType>({
  dataNotifications: [
    { id: 1, title: "NPM package locally" },
    { id: 2, title: "Add another components" },
    { id: 3, title: "Make the mobile version" },
    { id: 4, title: "Fast tuning juste for pleasure" },
  ],
  setDataNotifications: (dataNotifications: NotificationType[]) => {
    dataNotifications;
  },
});

const data = () => {
  const { dataNotifications } =
    useContext<NotificationsType>(NotificationsContext);
  return dataNotifications;
};

export const NotificationsContextProvider = ({ children }: SlotType) => {
  const [dataNotifications, setDataNotifications] = useState(data());

  return (
    <NotificationsContext.Provider
      value={{ dataNotifications, setDataNotifications }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

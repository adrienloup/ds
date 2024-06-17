import { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../contexts/NotificationContext";
import { NotificationsType } from "../models/Notification";
import { useLocalStorage } from "./useLocalStorage";

const LocalData = () => {
  const { dataNotifications } =
    useContext<NotificationsType>(NotificationContext);
  const { getItem } = useLocalStorage();
  return (
    JSON.parse(getItem("_ds_y0y09_10_notification") as string) ??
    dataNotifications
  );
};

export const useNotification = () => {
  const [dataNotifications, setDataNotification] = useState(LocalData());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10_notification", JSON.stringify(dataNotifications));
  }, [dataNotifications, setDataNotification]);

  return { dataNotifications, setDataNotification };
};

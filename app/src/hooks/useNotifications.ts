import { useContext, useEffect, useState } from "react";
import { NotificationsContext } from "../contexts/Notifications";
import { NotificationsType } from "../models/Notifications";
import { useLocalStorage } from "./useLocalStorage";

const LocalData = () => {
  const { dataNotifications } =
    useContext<NotificationsType>(NotificationsContext);
  const { getItem } = useLocalStorage();
  return (
    JSON.parse(getItem("_ds_y0y09_10_notifications") as string) ??
    dataNotifications
  );
};

export const useNotifications = () => {
  const [dataNotifications, setDataNotifications] = useState(LocalData());
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem("_ds_y0y09_10_notifications", JSON.stringify(dataNotifications));
  }, [dataNotifications, setDataNotifications]);

  return { dataNotifications, setDataNotifications };
};

import { useContext } from "react";
import { NotificationsContext } from "../contexts/Notifications";

export function useNotifications() {
  return useContext(NotificationsContext);
}

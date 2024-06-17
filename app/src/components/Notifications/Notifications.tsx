import { useContext, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NotificationContext } from "../../contexts/NotificationContext";
import { NotificationsType } from "../../models/Notification";
import { NotificationForm } from "./NotificationForm";
import { Notification } from "./Notification";
import style from "./Notifications.module.scss";

export const Notifications = () => {
  console.log("Notifications");

  const { dataNotifications, setDataNotification } =
    useContext<NotificationsType>(NotificationContext);
  const [notifications, setNotifications] = useState(dataNotifications);
  const { user } = useAuth();

  const handleDelete = (id: number) => {
    const listed = notifications.filter(
      (notification) => notification.id !== id
    );
    setDataNotification([...listed]);
    setNotifications([...listed]);
  };

  const handleAdd = ({ id, title }: { id: number; title: string }) => {
    setDataNotification([...dataNotifications, { id, title }]);
    setNotifications([...notifications, { id, title }]);
  };

  return (
    <div className={style.notifications}>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              <Notification
                notification={notification}
                handleDelete={() => handleDelete(notification.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.empty}>No new but don't give up :)</p>
      )}
      {user && <NotificationForm handleAdd={handleAdd} />}
    </div>
  );
};

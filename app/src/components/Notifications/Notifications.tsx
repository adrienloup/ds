import { useContext, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { NotificationsContext } from "../../contexts/Notifications";
import { NotificationsType } from "../../models/Notifications";
import { NotificationForm } from "./NotificationForm";
import { Notification } from "./Notification";
import style from "./Notifications.module.scss";

export const Notifications = () => {
  console.log("Notifications");

  const { dataNotifications, setDataNotifications } =
    useContext<NotificationsType>(NotificationsContext);
  const [notifications, setNotifications] = useState(dataNotifications);
  const { user } = useUser();

  const handleDelete = (id: number) => {
    const listed = notifications.filter(
      (notification) => notification.id !== id
    );
    setDataNotifications([...listed]);
    setNotifications([...listed]);
  };

  const handleAdd = ({ id, title }: { id: number; title: string }) => {
    setDataNotifications([...dataNotifications, { id, title }]);
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

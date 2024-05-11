import { useContext, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { DataContext } from "../../contexts/DataContext";
import { DataType } from "../../models/Data";
import { NotificationFormComponent } from "./NotificationForm";
import { NotificationComponent } from "./Notification";
import style from "./Notifications.module.scss";

export const NotificationsComponent = () => {
  const { data, setData } = useContext<DataType>(DataContext);
  const [notifications, setNotifications] = useState(data.notifications);
  const { user } = useAuth();

  const handleDelete = (id: number) => {
    const listed = notifications.filter(
      (notification) => notification.id !== id
    );
    setData({ ...data, notifications: [...listed] });
    setNotifications([...listed]);
  };

  const handleAdd = ({ id, title }: { id: number; title: string }) => {
    setData({ ...data, notifications: [...notifications, { id, title }] });
    setNotifications([...notifications, { id, title }]);
  };

  return (
    <div className={style.notifications}>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <NotificationComponent
              notification={notification}
              handleDelete={() => handleDelete(notification.id)}
            />
          </li>
        ))}
      </ul>
      {user && <NotificationFormComponent handleAdd={handleAdd} />}
    </div>
  );
};

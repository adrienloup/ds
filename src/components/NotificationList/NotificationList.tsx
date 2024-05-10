import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { NotificationForm } from "./NotificationForm";
import { Notification } from "./Notification";
import style from "./NotificationList.module.scss";

export const NotificationList = () => {
  const { data, setData } = useContext(DataContext);
  const [notification, setNotificationlist] = useState(data.notifications);

  const handleDelete = (id: number) => {
    const listed = notification.filter(
      (notification) => notification.id !== id
    );
    setData({ ...data, notifications: [...listed] });
    setNotificationlist([...listed]);
  };

  const handleAdd = ({ id, label }: { id: number; label: string }) => {
    setData({ ...data, notifications: [...notification, { id, label }] });
    setNotificationlist([...notification, { id, label }]);
  };

  return (
    <div className={style.notificationlist}>
      <ul>
        {notification.map((notification) => (
          <li key={notification.id}>
            <Notification
              notification={notification}
              handleDelete={() => handleDelete(notification.id)}
            />
          </li>
        ))}
      </ul>
      <NotificationForm handleAdd={handleAdd} />
    </div>
  );
};

import { Button } from "../Button/Button";
import style from "./Notifications.module.scss";

interface NotificationType {
  notification: {
    id: number;
    title: string;
  };
  handleDelete: () => void;
}

export const Notification = ({
  notification,
  handleDelete,
}: NotificationType) => {
  return (
    <div className={style.notification}>
      <span>{notification.title}</span>
      <Button cssClass={style.button} onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

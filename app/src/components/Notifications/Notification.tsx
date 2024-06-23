import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
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
  console.log("Notification");

  return (
    <div className={style.notification}>
      <span>{notification.title}</span>
      <Button cssClass={style.button} onClick={handleDelete}>
        <Icon cssClass={style.icon} name="delete" />
      </Button>
    </div>
  );
};

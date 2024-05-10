import { Button } from "../Button/Button";
import style from "./NotificationList.module.scss";

type NotificationProps = {
  notification: {
    id: number;
    label: string;
  };
  handleDelete: () => void;
};

export const Notification = ({
  notification,
  handleDelete,
}: NotificationProps) => {
  return (
    <div className={style.notification}>
      <span>{notification.label}</span>
      <Button cssClass={style.button} onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

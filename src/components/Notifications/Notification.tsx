import { ButtonComponent } from "../Button/Button";
import style from "./Notifications.module.scss";

type NotificationProps = {
  notification: {
    id: number;
    title: string;
  };
  handleDelete: () => void;
};

export const NotificationComponent = ({
  notification,
  handleDelete,
}: NotificationProps) => {
  return (
    <div className={style.notification}>
      <span>{notification.title}</span>
      <ButtonComponent cssClass={style.button} onClick={handleDelete}>
        Delete
      </ButtonComponent>
    </div>
  );
};

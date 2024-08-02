import { useNotifications } from "../../hooks/useNotifications";
import style from "./Notifications.module.scss";

export const Notifications = () => {
  // console.log("Notifications");
  const { loading, data, errors } = useNotifications();

  return (
    <div className={style.notifications}>
      {loading && <div>Loading...</div>}
      {errors && <div>Failed to fetch</div>}
      {data &&
        data.map(
          (notification: {
            userId: number;
            id: number;
            title: string;
            body: string;
          }) => (
            <div className={style.notification} key={notification.id}>
              <span>{notification.title}</span>
              <p>{notification.body} [...]</p>
            </div>
          )
        )}
    </div>
  );
};

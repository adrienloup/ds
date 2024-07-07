import { useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../../hooks/useSettings";
import { useTask } from "../../hooks/useTask";
import { useAuth } from "../../hooks/useAuth";
import { useNotifications } from "../../hooks/useNotifications";
import { Notifications } from "../Notifications/Notifications";
import { TaskForm } from "../Task/TaskForm";
import { TaskList } from "../Task/TaskList";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import style from "./ToolsBar.module.scss";

export const ToolsBar = () => {
  // console.log("ToolsBar");
  const [notificationModal, setNotificationModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const { settings, setSettings } = useSettings();
  const { data } = useNotifications();
  const { user } = useAuth();
  const tasks = useTask();

  const handleSettingsChange = (open: boolean) => {
    setSettings({ ...settings, open });
  };

  return (
    <div className={style.toolsbar}>
      {user.name && (
        <Badge value={tasks.length} max={9} cssClass={style.badge}>
          <Button
            ariaLabel={"Tasks"}
            cssClass={style.button}
            onClick={() => setTaskModal(!taskModal)}
          >
            <Icon name={"task_alt"} />
          </Button>
        </Badge>
      )}
      <Button
        href={"https://github.com/adrienloup/ds"}
        ariaLabel={"Github"}
        cssClass={style.button}
      >
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
            fill="currentColor"
          ></path>
        </svg>
      </Button>
      <Badge value={data.length} max={9} cssClass={style.badge}>
        <Button
          ariaLabel={"Notifications"}
          cssClass={style.button}
          onClick={() => setNotificationModal(!notificationModal)}
        >
          <Icon name="notifications" />
        </Button>
      </Badge>
      <Button
        ariaLabel={"Settings"}
        cssClass={style.button}
        onClick={() => handleSettingsChange(!settings.open)}
      >
        <Icon name={"settings"} />
      </Button>
      {notificationModal &&
        createPortal(
          <Modal
            head={
              <h3>
                Breaking <span>news</span>
              </h3>
            }
            body={<Notifications />}
            open={notificationModal}
            onClick={() => setNotificationModal(false)}
          />,
          document.body
        )}
      {taskModal &&
        createPortal(
          <Modal
            head={
              <h3>
                {tasks && tasks.length > 1
                  ? tasks.length + " Tasks"
                  : tasks.length === 1
                    ? tasks.length + " Task"
                    : "Task"}
              </h3>
            }
            body={
              <>
                <TaskForm />
                <TaskList />
              </>
            }
            open={taskModal}
            onClick={() => setTaskModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

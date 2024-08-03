import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../../hooks/useSettings";
import { useTask } from "../../hooks/useTask";
import { useAuth } from "../../hooks/useAuth";
import { useNotifications } from "../../hooks/useNotifications";
import { Notifications } from "../Notifications/Notifications";
import { Tooltip } from "../Tooltip/Tooltip";
import { TaskForm } from "../Task/TaskForm";
import { TaskList } from "../Task/TaskList";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import { Like } from "../Like/Like";
import styles from "./ToolsBar.module.scss";

export const ToolsBar = () => {
  const [notificationModal, setNotificationModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);
  const [like, setLike] = useState(false);
  const { settings, setSettings } = useSettings();
  const { data } = useNotifications();
  const { user } = useAuth();
  const tasks = useTask();
  const notificationRef = useRef<HTMLDivElement>(null);
  const taskRef = useRef<HTMLButtonElement>(null);

  const handleSettingsChange = (open: boolean) => {
    setSettings({ ...settings, open });
  };

  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.toolsbar} data-cy="toolsbar">
      {user.name && (
        <Badge value={tasks.length} max={9} cssClass={styles.badge}>
          <Button
            innerRef={taskRef}
            aria-label={"Tasks"}
            cssClass={styles.button}
            onClick={() => setTaskModal(!taskModal)}
          >
            <Icon name={"task_alt"} cssClass={styles.icon} />
          </Button>
        </Badge>
      )}
      <Tooltip
        text="I like a lot"
        position="bottom"
        onKeyDown={() => setLike(!like)}
      >
        <Button
          tabIndex={-1}
          aria-label={"I like a lot"}
          cssClass={[styles.button, ` ${styles.like}`].join("")}
          data-cy="toolsbar-like"
          onClick={() => setLike(!like)}
        >
          <Like active={like} />
        </Button>
      </Tooltip>
      <Tooltip
        text="GitHub repository"
        position="bottom"
        onKeyDown={() => handleOpenNewTab("https://github.com/adrienloup/ds")}
      >
        <Button
          tabIndex={-1}
          href={"https://github.com/adrienloup/ds"}
          aria-label={"GitHub repository"}
          cssClass={styles.button}
          data-cy="toolsbar-github"
        >
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
              fill="currentColor"
            ></path>
          </svg>
        </Button>
      </Tooltip>
      <Tooltip
        innerRef={notificationRef}
        text="Notifications"
        position="bottom"
        onKeyDown={() => setNotificationModal(!notificationModal)}
      >
        <Badge value={data.length} max={9} cssClass={styles.badge}>
          <Button
            tabIndex={-1}
            aria-label={"Notifications"}
            cssClass={styles.button}
            data-cy="toolsbar-notifications"
            onClick={() => setNotificationModal(!notificationModal)}
          >
            <Icon
              name={
                data.length > 0 ? "notifications_active" : "notifications_off"
              }
              cssClass={styles.icon}
            />
          </Button>
        </Badge>
      </Tooltip>
      <Tooltip
        text="Settings"
        position="bottom-end"
        onKeyDown={() => handleSettingsChange(!settings.open)}
      >
        <Button
          tabIndex={-1}
          aria-label={"Settings"}
          cssClass={styles.button}
          data-cy="toolsbar-settings"
          onClick={() => handleSettingsChange(!settings.open)}
        >
          <Icon name={"settings"} />
        </Button>
      </Tooltip>
      {notificationModal &&
        createPortal(
          <Modal
            targetRef={notificationRef}
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
            targetRef={taskRef}
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

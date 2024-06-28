import { useState } from "react";
import { createPortal } from "react-dom";
import { useTasks } from "../../contexts/Tasks";
import { TasksApp } from "../Tasks/TasksApp";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import style from "./Tools.module.scss";

export const Tools = ({ onSettings }: { onSettings: () => void }) => {
  console.log("Tools");

  const tasks = useTasks();
  const [tasksModal, setTasksModal] = useState(false);

  return (
    <div className={style.tools}>
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
      <Badge value={tasks!.length} max={9} cssClass={style.badge}>
        <Button
          ariaLabel={"Notifications"}
          cssClass={style.button}
          onClick={() => setTasksModal(!tasksModal)}
        >
          <Icon name="notifications" />
        </Button>
      </Badge>
      <Button
        ariaLabel={"Settings"}
        cssClass={style.button}
        onClick={onSettings}
      >
        <Icon name={"settings"} />
      </Button>
      {tasksModal &&
        createPortal(
          <Modal
            head={
              <h3>
                {tasks && tasks.length > 0 ? tasks.length : ""} Breaking{" "}
                <span>news</span>
              </h3>
            }
            body={<TasksApp />}
            open={tasksModal}
            onClick={() => setTasksModal(false)}
          />,
          document.body
        )}
    </div>
  );
};

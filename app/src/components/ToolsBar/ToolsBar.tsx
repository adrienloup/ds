import { useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../../hooks/useSettings";
import { useTask } from "../../hooks/useTask";
import { useAuth } from "../../hooks/useAuth";
import { PageType } from "../../models/Page";
import { Select } from "../Forms/Select/Select";
import { TaskForm } from "../Task/TaskForm";
import { TaskList } from "../Task/TaskList";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import pages from "../../data/pages.json";
import style from "./ToolsBar.module.scss";

const options = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

export const ToolsBar = () => {
  // console.log("ToolsBar");
  const { settings, setSettings } = useSettings();
  const [modalTask, setModalTask] = useState(false);
  // const [value, setValue] = useState({ name: "", path: "" });
  const [value, setValue] = useState("");
  const { user } = useAuth();
  const tasks = useTask();

  const handleSettingsChange = (open: boolean) => {
    setSettings({ ...settings, open });
  };

  const options = pages.filter((page: PageType) => {
    if (page.category === "getting started") return false;
    if (value && !page.name.includes(value)) return false;
    return true;
  });

  console.log("options ", options);

  return (
    <div className={style.toolsbar}>
      <Select
        options={options}
        value={value}
        handleValueChange={(e) => setValue(e.target.value)}
        // handleOptionChange={(option) => setValue(option.name)}
      />
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
          onClick={() => setModalTask(!modalTask)}
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
      {modalTask &&
        createPortal(
          <Modal
            head={
              <h3>
                {tasks && tasks.length > 0 ? tasks.length + " " : ""}
                Breaking <span>news</span>
              </h3>
            }
            body={
              <>
                {user.name && <TaskForm />}
                <TaskList />
              </>
            }
            open={modalTask}
            onClick={() => setModalTask(false)}
          />,
          document.body
        )}
    </div>
  );
};

import { useState } from "react";
import { useTasksDispatch } from "../../contexts/Tasks";
import { TextField } from "../Forms/TextField/TextField";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Tasks.module.scss";

export const TasksForm = () => {
  console.log("TasksForm");

  const dispatch = useTasksDispatch();
  const [text, setText] = useState("");

  return (
    <div className={style.form}>
      <TextField
        placeholder="Add task"
        value={text}
        cssClass={style.textfield}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        cssClass={style.button}
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        <Icon cssClass={style.icon} name="queue" />
      </Button>
    </div>
  );
};

let nextId = 3;

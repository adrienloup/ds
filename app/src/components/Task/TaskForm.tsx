import { useState } from "react";
import { useTaskDispatch } from "../../hooks/useTask";
import { TextField } from "../Forms/TextField/TextField";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Task.module.scss";

export const TaskForm = () => {
  // console.log("TaskForm");
  const dispatch = useTaskDispatch();
  const [text, setText] = useState("");

  return (
    <div className={style.form}>
      <TextField
        placeholder="Add task"
        value={text}
        cssClass={style.textfield}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length > 0 && (
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
      )}
    </div>
  );
};

let nextId = 3;

import { useState } from "react";
import { useTaskDispatch } from "../../hooks/useTask";
import { TextField } from "../Forms/TextField/TextField";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./Task.module.scss";

export const TaskForm = () => {
  // console.log("TaskForm");
  const dispatch = useTaskDispatch();
  const [text, setText] = useState("");

  return (
    <div className={styles.form}>
      <TextField
        placeholder="Add task"
        value={text}
        cssClass={[styles.textfield]}
        onChange={(e) => setText(e.target.value)}
      />
      {text.length > 0 && (
        <Button
          cssClass={styles.button}
          onClick={() => {
            setText("");
            dispatch!({
              type: "added",
              id: nextId++,
              text: text,
            });
          }}
        >
          <Icon cssClass={styles.icon} name="queue" />
        </Button>
      )}
    </div>
  );
};

let nextId = 3;

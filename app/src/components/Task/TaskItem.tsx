import { useId, useState } from "react";
import { useTaskDispatch } from "../../hooks/useTask";
import { useAuth } from "../../hooks/useAuth";
import { TextField } from "../Forms/TextField/TextField";
import { Checkbox } from "../Forms/Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./Task.module.scss";

export const TaskItem = ({
  task,
}: {
  task: {
    id: number;
    text: string;
    done: boolean;
  };
}) => {
  // console.log("TaskItem");
  const uId = useId();
  const dispatch = useTaskDispatch();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (user.name && isEditing) {
    taskContent = (
      <>
        <TextField
          value={task.text}
          cssClass={[styles.textfield]}
          onChange={(e: { target: { value: string } }) => {
            dispatch!({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <Button cssClass={styles.button} onClick={() => setIsEditing(false)}>
          <Icon cssClass={styles.icon} name="save" />
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <label htmlFor={uId} className={styles.label}>
          {task.text}
        </label>
        {user.name && (
          <Button cssClass={styles.button} onClick={() => setIsEditing(true)}>
            <Icon cssClass={styles.icon} name="edit" />
          </Button>
        )}
      </>
    );
  }

  return (
    <div className={styles.task}>
      <Checkbox
        cssClass={styles.checkbox}
        id={uId}
        checked={task.done}
        onChange={(e: { target: { checked: boolean } }) => {
          dispatch!({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <Button
        cssClass={styles.button}
        onClick={() => {
          dispatch!({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        <Icon cssClass={styles.icon} name="delete" />
      </Button>
    </div>
  );
};

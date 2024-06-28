import { useId, useState } from "react";
import { useTasksDispatch } from "../../contexts/Tasks";
import { useAuth } from "../../hooks/useAuth";
import { TextField } from "../Forms/TextField/TextField";
import { Checkbox } from "../Forms/Checkbox/Checkbox";
import { TaskType } from "../../models/Task";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Tasks.module.scss";

export const Task = ({ task }: { task: TaskType }) => {
  console.log("Task");

  const dispatch = useTasksDispatch();
  const uId = useId();
  const { dataAuth } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (dataAuth.user !== null && isEditing) {
    taskContent = (
      <>
        <TextField
          value={task.text}
          cssClass={style.textfield}
          onChange={(e: { target: { value: string } }) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <Button cssClass={style.button} onClick={() => setIsEditing(false)}>
          <Icon cssClass={style.icon} name="save" />
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <label htmlFor={uId} className={style.label}>
          {task.text}
        </label>
        {dataAuth.user !== null && (
          <Button cssClass={style.button} onClick={() => setIsEditing(true)}>
            <Icon cssClass={style.icon} name="edit" />
          </Button>
        )}
      </>
    );
  }

  return (
    <div className={style.task}>
      <Checkbox
        cssClass={style.checkbox}
        id={uId}
        checked={task.done}
        onChange={(e: { target: { checked: boolean } }) => {
          dispatch({
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
        cssClass={style.button}
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        <Icon cssClass={style.icon} name="delete" />
      </Button>
    </div>
  );
};

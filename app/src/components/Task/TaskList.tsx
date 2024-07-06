import { useTask } from "../../hooks/useTask";
import { TaskItem } from "./TaskItem";
import { Empty } from "../Empty/Empty";
import style from "./Task.module.scss";

export const TaskList = () => {
  // console.log("TaskList");
  const tasks = useTask();

  return (
    <div className={style.tasklist}>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task: { id: number; text: string; done: boolean }) => (
            <li key={task.id}>
              <TaskItem task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty text="No new but don't give up :)" cssClass={style.empty} />
      )}
    </div>
  );
};

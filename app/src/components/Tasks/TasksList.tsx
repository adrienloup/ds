import { useTasks } from "../../contexts/Tasks";
import { Task } from "./Task";
import style from "./Tasks.module.scss";

export const TasksList = () => {
  console.log("TasksList");

  const tasks = useTasks();

  return (
    <div className={style.taskslist}>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.empty}>No new but don't give up :)</p>
      )}
    </div>
  );
};

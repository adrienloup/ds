import { useAuth } from "../../hooks/useAuth";
import { TasksForm } from "./TasksForm";
import { TasksList } from "./TasksList";

export const TasksApp = () => {
  console.log("TasksApp");

  const { dataAuth } = useAuth();

  return (
    <>
      {dataAuth.user !== null && <TasksForm />}
      <TasksList />
    </>
  );
};

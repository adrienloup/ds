import { useContext } from "react";
import { TaskContext, TaskDispatchContext } from "../contexts/Task";

export function useTask() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

import { createContext, useContext, useReducer } from "react";
import { tasksReducer } from "../reducers/Tasks";
import { SlotType } from "../models/Slot";
import { TaskType } from "../models/Task";

const TasksContext = createContext<TaskType[]>([]);
const TasksDispatchContext = createContext<any>(null);

export function TasksProvider({ children }: SlotType) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

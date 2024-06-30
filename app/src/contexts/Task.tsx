import { Dispatch, createContext, useReducer } from "react";
import { tasksReducer } from "../reducers/Task";
import { SlotType } from "../models/Slot";

const initialTask = [
  { id: 0, text: "Philosopher’s Path", done: false },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export const TaskContext = createContext<
  { id: number; text: string; done: boolean }[]
>([]);
export const TaskDispatchContext = createContext<
  Dispatch<{
    type: string;
    id?: number;
    text?: string;
    task?: { id: number; text: string; done: boolean };
  }>
>(() => {});

export function TaskProvider({ children }: SlotType) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTask);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

import { useCallback, useReducer } from "react";

function todoReducer(
  state: { todos: any[]; showCompleted: any },
  action: { type: string; payload: any }
) {
  if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo !== action.payload),
    };
  }
  if (action.type === "TOGGLE_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo === action.payload ? { ...todo, checked: !todo.checked } : todo
      ),
    };
  }
  if (action.type === "CLEAR_COMPLETED") {
    return {
      ...state,
      todos: state.todos.filter((todo) => !todo.checked),
    };
  }
  if (action.type === "TOGGLE_COMPLETED") {
    return {
      ...state,
      showCompleted: !state.showCompleted,
    };
  }
  return state;
}

export function useTodoTestUseReducer() {
  const [state, dispatch] = useReducer(todoReducer, {
    showCompleted: true,
    todos: [
      {
        name: "Todo1",
        checked: false,
      },
      {
        name: "Todo2",
        checked: false,
      },
      {
        name: "Todo3",
        checked: false,
      },
    ],
  });

  const todoList = state.showCompleted
    ? state.todos
    : state.todos.filter((todo) => !todo.checked);

  return {
    todoList: todoList,
    deleteTodo: useCallback(
      (todo: any) => dispatch({ type: "DELETE_TODO", payload: todo }),
      []
    ),
    toggleTodo: useCallback(
      (todo: any) => dispatch({ type: "TOGGLE_TODO", payload: todo }),
      []
    ),
    clearCompleted: useCallback(
      () =>
        dispatch({
          type: "CLEAR_COMPLETED",
          payload: undefined,
        }),
      []
    ),
    toggleCompleted: useCallback(
      () =>
        dispatch({
          type: "TOGGLE_COMPLETED",
          payload: undefined,
        }),
      []
    ),
    showCompleted: state.showCompleted,
  };
}

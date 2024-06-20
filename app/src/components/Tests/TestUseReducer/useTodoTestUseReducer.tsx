import { useCallback, useReducer } from "react";

function todoReducer(state: any, action: any) {
  if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo: any) => todo !== action.payload),
    };
  }
  if (action.type === "TOGGLE_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo: any) =>
        todo === action.payload ? { ...todo, checked: !todo.checked } : todo
      ),
    };
  }
  if (action.type === "CLEAR_COMPLETED") {
    return {
      ...state,
      todos: state.todos.filter((todo: any) => !todo.checked),
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
    : state.todos.filter((todo: any) => !todo.checked);

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
      () => dispatch({ type: "CLEAR_COMPLETED" }),
      []
    ),
    toggleCompleted: useCallback(
      () => dispatch({ type: "TOGGLE_COMPLETED" }),
      []
    ),
    showCompleted: state.showCompleted,
  };
}

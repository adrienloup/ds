import { memo, useCallback, useState } from "react";

export function TestUseCallback() {
  console.log("TestUseCallback");

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <TestUseCallbackTodos todos={todos} addTodo={addTodo} />
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ marginRight: "1rem" }}
        >
          +
        </button>
        {count}
      </div>
      <p style={{ fontSize: "2rem", color: "red", marginTop: "1rem" }}>
        Todos will only re-render when the todos prop changes.
      </p>
    </>
  );
}

const TestUseCallbackTodos = memo(
  ({ todos, addTodo }: { todos: string[]; addTodo: () => void }) => {
    console.log("TestUseCallbackTodos");

    return (
      <>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo} style={{ marginTop: "1rem" }}>
          Add Todo
        </button>
      </>
    );
  },
);

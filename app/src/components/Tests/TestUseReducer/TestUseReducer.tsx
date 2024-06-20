import { useTodoTestUseReducer } from "./useTodoTestUseReducer";

export function TestUseReducer() {
  console.log("TestUseReducer");

  const {
    todoList,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    toggleCompleted,
    showCompleted,
  } = useTodoTestUseReducer();

  return (
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => toggleCompleted()}
        />
        Display todos completed
      </label>
      <ul>
        {todoList.map((todo: { name: string; checked: boolean }) => (
          <li
            key={todo.name}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo)}
              />
              {todo.name}
            </label>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => clearCompleted()} style={{ marginTop: "1rem" }}>
        Delete completed todos
      </button>
      <p style={{ fontSize: "2rem", color: "red", marginTop: "1rem" }}>
        Reduce is a different development model that changes state depending on
        action. Dispatch is a function that never changes so there is no need to
        put a dependency in a useEffect.
      </p>
    </div>
  );
}

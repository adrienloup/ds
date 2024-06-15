import { useMemo, useState } from "react";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

export function TestUseMemo() {
  console.log("TestUseMemo");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <div>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button
          onClick={() => setTodos((t) => [...t, "New Todo"])}
          style={{ marginTop: "1rem" }}
        >
          Add Todo
        </button>
      </div>
      <div style={{ margin: "1rem 0" }}>
        Count: {count}
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ marginLeft: "1rem" }}
        >
          +
        </button>
      </div>
      <p>Expensive Calculation {calculation}</p>
    </div>
  );
}

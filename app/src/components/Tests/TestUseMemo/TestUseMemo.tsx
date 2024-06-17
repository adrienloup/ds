import { useMemo, useState } from "react";

export function TestUseMemo() {
  console.log("TestUseMemo");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const [expensive, setExpensive] = useState("1");

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    const _expensive = Number(expensive);
    for (let i = 0; i < _expensive; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const random = useMemo(() => Math.random(), []);

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
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{ marginRight: "1rem" }}
        >
          +
        </button>
        {count}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          Expensive Calculation {calculation}
        </div>
        <input
          type="text"
          value={expensive}
          onChange={(e) => setExpensive(e.target.value)}
        />{" "}
        <i>1000000000</i>
      </div>
      <div style={{ marginTop: "2rem" }}>
        Random {random}
        <p style={{ marginTop: "1rem" }}>Random number that never changes</p>
      </div>
      <p style={{ fontSize: "2rem", color: "red", marginTop: "1rem" }}>
        No preventive optimization. If something is too slow, React will display
        an alert in the console, you must check 'Verbose' in 'All levels' from
        the console.
      </p>
    </div>
  );
}

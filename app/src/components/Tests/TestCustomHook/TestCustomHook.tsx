import { useState } from "react";

export function TestCustomHook() {
  console.log("TestCustomHook");

  const useIncrement = ({ base = 0, max = Infinity, min = -Infinity }) => {
    const [state, setState] = useState(base);

    return {
      state,
      increment: () => setState((s) => (s < max ? s + 1 : s)),
      decrement: () => setState((s) => (s > min ? s - 1 : s)),
    };
  };

  const { state, increment, decrement } = useIncrement({
    base: 0,
    max: 10,
    min: 0,
  });

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div style={{ padding: "1rem", fontSize: "1.25rem" }}>{state}</div>
    </div>
  );
}

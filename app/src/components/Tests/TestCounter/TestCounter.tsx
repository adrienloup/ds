import { useState } from "react";

export function TestCounter() {
  console.log("TestCounter");
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <div style={{ paddingLeft: "1rem" }}>{count}</div>
    </div>
  );
}

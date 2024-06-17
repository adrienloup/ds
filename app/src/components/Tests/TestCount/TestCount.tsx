import { useState } from "react";

export function TestCount() {
  console.log("TestCount");
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <div style={{ paddingLeft: "1rem" }}>{count}</div>
    </div>
  );
}

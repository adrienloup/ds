import TestHigherOrderComponentCounterA from "./TestHigherOrderComponentCounterA";
import TestHigherOrderComponentCounterB from "./TestHigherOrderComponentCounterB";

export function TestHigherOrderComponent() {
  console.log("TestHigherOrderComponent");

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <TestHigherOrderComponentCounterA />
      <TestHigherOrderComponentCounterB />
    </div>
  );
}

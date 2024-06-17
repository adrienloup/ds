import { TestUseRefHeight } from "./TestUseRefHeight";
import { TestUseRefValue } from "./TestUseRefValue";

export function TestUseRef() {
  console.log("TestUseRef");

  return (
    <div>
      <TestUseRefValue />
      <TestUseRefHeight />
      <p style={{ fontSize: "2rem", color: "red", marginTop: "1rem" }}>
        Save the reference of an HTML element or any value without rendering
        throughout the lifecycle.
      </p>
    </div>
  );
}

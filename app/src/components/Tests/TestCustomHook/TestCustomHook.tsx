import { TestCustomHookCounter } from "./TestCustomHookCounter";
import { TestCustomHookFetch } from "./TestCustomHookFetch";

export function TestCustomHook() {
  console.log("TestCustomHook");

  return (
    <>
      <TestCustomHookCounter />
      <TestCustomHookFetch />
    </>
  );
}

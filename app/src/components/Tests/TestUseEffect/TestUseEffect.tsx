import { useState } from "react";
import { TestUseEffectTitle } from "./TestUseEffectTitle";
import { TestUseEffectTimer } from "./TestUseEffectTimer";

export function TestUseEffect() {
  console.log("TestUseEffectHooks");

  const [show, setShow] = useState(true);

  return (
    <>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        Toggle title & scrollTop
      </label>
      {show && <TestUseEffectTitle />}
      <TestUseEffectTimer />
      <p style={{ fontSize: "2rem", color: "red", marginTop: "1rem" }}>
        No setters at first level of useEffect, favor an external manager.
        Remove event listener from useEffect.
      </p>
    </>
  );
}

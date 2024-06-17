import { useRef, useState } from "react";

export function TestUseRefValue() {
  console.log("TestUseRefValue");
  const ref = useRef("");
  const [checked, setChecked] = useState(false);

  console.log(ref);

  return (
    <div>
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Re-rendering
      </label>
      <button
        type="button"
        onClick={
          checked
            ? () => ((ref.current = "Hello"), console.log(ref))
            : () => console.log(ref)
        }
        style={{ marginTop: "1rem" }}
      >
        Changes ref value without re-rendering
      </button>
    </div>
  );
}

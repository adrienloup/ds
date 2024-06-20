import { useRef, useState } from "react";

export function TestUseRefValue() {
  console.log("TestUseRefValue");

  const ref = useRef("");
  const [checked, setChecked] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log(ref);

  return (
    <div>
      <label style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        Changes ref value
      </label>
      <button
        type="button"
        onClick={
          checked
            ? () => ((ref.current = "Hello"), console.log(ref))
            : () => ((ref.current = ""), setToggle(!toggle))
        }
        style={{ marginTop: "1rem" }}
      >
        {checked ? "Without re-rendering" : "Re-rendering"}
      </button>
    </div>
  );
}

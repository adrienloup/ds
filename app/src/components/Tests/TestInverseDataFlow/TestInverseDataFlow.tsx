import { useState } from "react";

export function TestInverseDataFlow() {
  console.log("TestInverseDataFlow");
  const [accepted, setAccepted] = useState(false);

  const CheckboxInerseDataFlow = ({
    onCheck,
    checked,
  }: {
    onCheck: (e: boolean) => void;
    checked: boolean;
  }) => {
    return (
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          onChange={(e) => onCheck(e.target.checked)}
          checked={checked}
        />
        Accept the conditions
      </label>
    );
  };

  return (
    <form style={{ display: "flex", alignItems: "center" }}>
      <CheckboxInerseDataFlow onCheck={setAccepted} checked={accepted} />
      <button
        type="button"
        disabled={!accepted}
        onClick={() => console.log("Validate")}
        style={{ marginLeft: "1rem" }}
      >
        Validate
      </button>
    </form>
  );
}

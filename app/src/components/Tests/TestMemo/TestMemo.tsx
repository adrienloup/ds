import { memo, useState } from "react";

export function TestMemo() {
  console.log("TestMemo");

  const [value, setValue] = useState("Value");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <GoodMemo />
      <BadMemo demo={value} />
    </div>
  );
}

const GoodMemo = memo(function Good() {
  console.log("TestMemo > Good");

  return <div style={{ marginTop: "1rem" }}>Good</div>;
});

const BadMemo = memo(function Bad({ demo }: { demo: string }) {
  console.log("TestMemo > Bad");

  return (
    <div style={{ marginTop: "1rem" }}>
      Bad {demo ? "Restored despite memorization" : ""}
    </div>
  );
});

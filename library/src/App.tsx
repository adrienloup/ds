import { useState } from "react";
import { DsButton } from "./components/Button/Button";
import { DsIcon } from "./components/Icon/Icon";
import "./App.scss";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>Application to create DS library</h1>
      <p>{count}</p>
      <DsButton
        onClick={() => setCount((count) => count + 1)}
        buttonProps={{
          "aria-label": "Checkbox A",
        }}
      >
        <DsIcon name="add_circle" />
      </DsButton>
    </div>
  );
}

export default App;

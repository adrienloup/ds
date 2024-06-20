import { useState } from "react";
import { DsButton } from "./components/Button/Button";
import { DsIcon } from "./components/Icon/Icon";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <DsButton
          onClick={() => setCount((count) => count + 1)}
          buttonProps={{
            "aria-label": "Checkbox A",
          }}
        >
          <DsIcon name="home" />
          Button {count}
        </DsButton>
      </div>

      <p className="read-the-docs">
        Application to create DS library components
      </p>
    </>
  );
}

export default App;

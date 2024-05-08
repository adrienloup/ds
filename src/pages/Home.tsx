import { useState } from "react";
import { Main } from "../components/Main/Main";
import { Aside } from "../components/Aside/Aside";

// @todo
import { Button } from "../library/Button/Button";

export default function HomePage() {
  const [count, setCount] = useState<number>(0);
  const [aside, setAside] = useState<boolean>(false);

  return (
    <>
      <header role="banner" className="header">
        <div className="inner">
          <Button />
        </div>
      </header>
      <Main>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => setAside(!aside)}>open/close</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div style={{ height: "2000px" }}></div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Main>
      <Aside
        open={aside}
        onClick={() => {
          setAside(false);
        }}
      />
      <footer role="contentinfo" className="footer">
        Atomic Design <span>way</span>
      </footer>
    </>
  );
}

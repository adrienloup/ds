import { useContext, useState } from "react";
import { SettingContext } from "../contexts/Setting";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Aside } from "../components/Aside/Aside";
import { Footer } from "../components/Footer/Footer";
import { Title } from "../components/Title/Title";
import { TodoList } from "../components/TodoList/TodoList";

// @todo
import { Button } from "../library/Button/Button";

export default function HomePage() {
  const { setting, setSetting } = useContext(SettingContext);
  const [mode, setMode] = useState<string>(setting.mode);
  const [aside, setAside] = useState<boolean>(false);

  const onMode = (mode: string) => {
    setSetting({ ...setting, mode: mode });
    setMode(mode);
  };

  return (
    <>
      <Header />
      <Main>
        <h1>Vite + React</h1>
        <br />
        <Button />
        <button onClick={() => setAside(!aside)}>open/close</button>
        <button onClick={() => onMode("dark")}>mode dark</button>
        <button onClick={() => onMode("light")}>mode light</button>
        {mode === "dark" ? "dark" : "light"}
        <br />
        <br />
        <TodoList />
        <br />
        <br />
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
      <Footer />
      <Title title="My Page Title" />
    </>
  );
}

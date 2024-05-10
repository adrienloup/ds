import { useContext, useState } from "react";
import { pages } from "../data/pages.json";
import { DataContext } from "../contexts/DataContext";
import { DataType } from "../models//Data";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Aside } from "../components/Aside/Aside";
import { Footer } from "../components/Footer/Footer";
import { Title } from "../components/Title/Title";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { ToolBar } from "../components/ToolBar/ToolBar";
import { NotificationList } from "../components/NotificationList/NotificationList";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";

export default function HomePage() {
  const { data, setData } = useContext<DataType>(DataContext);
  const [mode, setMode] = useState<string>(data.settings.mode);
  const [aside, setAside] = useState<boolean>(false);

  const handleMode = (mode: string) => {
    data.settings.mode = mode;
    setData({ ...data });
    setMode(mode);
  };

  return (
    <>
      <Header pages={pages} />
      <Main>
        {/* @TODO: change the event optimally */}
        <ToolBar onClick={() => setAside(!aside)} />
        <h1>
          A pretty good library{" "}
          <span>of components for Web application's UI</span>
        </h1>
        <Promote
          body={
            <p>
              DS library offers a comprehensive suite of free UI tools to help
              you ship new features faster Start with fully-loaded component
              library, or bring your own design system to our production-ready
              components.
            </p>
          }
          foot={
            <>
              <Button>button1</Button>
              <Button>button2</Button>
            </>
          }
        />
        <button onClick={() => setAside(!aside)}>open/close</button>
        <button onClick={() => handleMode("dark")}>mode dark</button>
        <button onClick={() => handleMode("light")}>mode light</button>
        {mode === "dark" ? "dark" : "light"}
        <br />
        <br />
        <NotificationList />
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
      <ScrollToTop />
    </>
  );
}

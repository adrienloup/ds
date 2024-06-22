import { useState } from "react";
import { SlotType } from "../../models/Slot";
import { ToolsBar } from "../ToolsBar/ToolsBar";
import { Banner } from "../Banner/Banner";
import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  console.log("Main");

  const [hidden, setHidden] = useState(false);

  return (
    <main role="main" className={style.main}>
      <ToolsBar />
      {!hidden && <Banner onClick={() => setHidden(true)} />}
      <div className={style.inner}>{children}</div>
    </main>
  );
};

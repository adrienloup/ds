import { SlotType } from "../../models/Slot";
import { ToolsBar } from "../ToolsBar/ToolsBar";
import { Settings } from "../Settings/Settings";
import { Banner } from "../Banner/Banner";
import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  // console.log("Main");

  return (
    <main role="main" className={style.main}>
      <ToolsBar />
      <Settings />
      <Banner />
      <div className={style.inner}>{children}</div>
    </main>
  );
};

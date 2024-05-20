import { useState } from "react";
import { SlotType } from "../../models/Slot";
import { ToolBar } from "../ToolBar/ToolBar";
import { Settings } from "../Settings/Settings";

import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  console.log("Main");

  const [sittings, setSittings] = useState(false);

  return (
    <main role="main" className={style.main}>
      <ToolBar onSettings={() => setSittings(!sittings)} />
      <Settings open={sittings} onClick={() => setSittings(false)} />
      <div className={style.inner}>{children}</div>
    </main>
  );
};

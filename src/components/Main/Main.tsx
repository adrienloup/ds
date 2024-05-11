import { SlotType } from "../../models/Slot";
import style from "./Main.module.scss";

export const MainComponent = ({ children }: SlotType) => {
  return (
    <main role="main" className={style.main}>
      {children}
    </main>
  );
};

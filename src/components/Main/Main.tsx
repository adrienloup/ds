import { SlotType } from "../../models/Slot";
import style from "./Main.module.scss";

export const Main = ({ children }: SlotType) => {
  return (
    <main role="main" className={style.main}>
      {children}
    </main>
  );
};

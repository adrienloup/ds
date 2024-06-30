import { SlotType } from "../../models/Slot";
import style from "./Alert.module.scss";

export const Alerts = ({ children }: SlotType) => {
  // console.log("Alerts");

  return <div className={style.alerts}>{children}</div>;
};

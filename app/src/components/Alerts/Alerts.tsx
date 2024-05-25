import { SlotType } from "../../models/Slot";
import style from "./Alerts.module.scss";

export const Alerts = ({ children }: SlotType) => {
  return <div className={style.alerts}>{children}</div>;
};

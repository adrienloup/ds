import { SlotType } from "../../models/Slot";
import style from "./Alerts.module.scss";

export const AlertsComponent = ({ children }: SlotType) => {
  return <div className={style.alerts}>{children}</div>;
};

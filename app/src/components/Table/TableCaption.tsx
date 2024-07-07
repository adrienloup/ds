import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

export const TableCaption = ({ children }: SlotType) => {
  return <caption className={style.caption}>{children}</caption>;
};

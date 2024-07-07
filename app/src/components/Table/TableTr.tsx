import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

export const TableTr = ({ children }: SlotType) => {
  return <tr className={style.tr}>{children}</tr>;
};

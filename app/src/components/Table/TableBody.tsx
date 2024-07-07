import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

export const TableBody = ({ children }: SlotType) => {
  return <tbody className={style.body}>{children}</tbody>;
};

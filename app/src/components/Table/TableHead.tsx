import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

export const TableHead = ({ children }: SlotType) => {
  return <thead className={style.head}>{children}</thead>;
};

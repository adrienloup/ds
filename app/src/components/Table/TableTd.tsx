import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

interface TableTdType extends SlotType {
  align?: "left" | "center" | "right" | "justify" | "char";
}

export const TableTd = ({ children, align }: TableTdType) => {
  return (
    <td align={align} className={style.td}>
      {children}
    </td>
  );
};

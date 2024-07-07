import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

interface TableThType extends SlotType {
  scope?: string;
  align?: "left" | "center" | "right" | "justify" | "char";
}

export const TableTh = ({ children, scope, align }: TableThType) => {
  return (
    <td scope={scope} align={align} className={style.th}>
      {children}
    </td>
  );
};

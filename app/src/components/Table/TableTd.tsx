import { AlignmentType } from "../../models/Alignment";
import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

interface TableTdType extends SlotType {
  align?: AlignmentType;
}

export const TableTd = ({ children, align = "left" }: TableTdType) => {
  return (
    <td align={align} className={styles.td}>
      {children}
    </td>
  );
};

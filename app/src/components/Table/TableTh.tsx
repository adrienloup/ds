import { AlignmentType } from "../../models/Alignment";
import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

interface TableThType extends SlotType {
  scope?: string;
  align?: AlignmentType;
}

export const TableTh = ({ children, scope, align = "left" }: TableThType) => {
  return (
    <td scope={scope} align={align} className={styles.th}>
      {children}
    </td>
  );
};

import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

interface TableType extends SlotType {
  ariaLabel?: string;
  ariaDescribedby?: string;
}

export const Table = ({ children, ariaLabel, ariaDescribedby }: TableType) => {
  return (
    <table
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      className={styles.table}
    >
      {children}
    </table>
  );
};

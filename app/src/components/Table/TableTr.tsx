import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

export const TableTr = ({ children }: SlotType) => {
  return <tr className={styles.tr}>{children}</tr>;
};

import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

export const TableHead = ({ children }: SlotType) => {
  return <thead className={styles.head}>{children}</thead>;
};

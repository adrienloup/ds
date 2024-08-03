import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

export const TableCaption = ({ children }: SlotType) => {
  return <caption className={styles.caption}>{children}</caption>;
};

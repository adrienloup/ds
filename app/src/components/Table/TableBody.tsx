import { SlotType } from "../../models/Slot";
import styles from "./Table.module.scss";

export const TableBody = ({ children }: SlotType) => {
  return <tbody className={styles.body}>{children}</tbody>;
};

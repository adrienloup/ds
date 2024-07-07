import { SlotType } from "../../models/Slot";
import style from "./Table.module.scss";

export const Table = ({ children }: SlotType) => {
  return <table className={style.table}>{children}</table>;
};

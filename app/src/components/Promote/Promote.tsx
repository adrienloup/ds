import { ReactNode } from "react";
import styles from "./Promote.module.scss";

interface PromoteProps {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
}

export const Promote = ({ head, body, foot }: PromoteProps) => {
  // console.log("promote");
  return (
    <div className={styles.promote}>
      {head && <div className={styles.head}>{head}</div>}
      {body && <div className={styles.body}>{body}</div>}
      {foot && <div className={styles.foot}>{foot}</div>}
    </div>
  );
};

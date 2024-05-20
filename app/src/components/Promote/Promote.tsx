import { ReactNode } from "react";
import style from "./Promote.module.scss";

interface PromoteType {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
}

export const Promote = ({ head, body, foot }: PromoteType) => {
  console.log("promote");

  return (
    <div className={style.promote}>
      {head && <div className={style.head}>{head}</div>}
      {body && <div className={style.body}>{body}</div>}
      {foot && <div className={style.foot}>{foot}</div>}
    </div>
  );
};

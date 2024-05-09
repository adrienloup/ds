import { ReactNode } from "react";
import style from "./Promote.module.scss";

type PromoteProps = {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
};

export const Promote = ({ head, body, foot }: PromoteProps) => {
  return (
    <div className={style.promote}>
      {head && <div className={style.head}>{head}</div>}
      {body && <div className={style.body}>{body}</div>}
      {foot && <div className={style.foot}>{foot}</div>}
    </div>
  );
};

import { ReactNode } from "react";
import style from "./Tooltip.module.scss";

type TooltipType = {
  children: ReactNode;
  content: ReactNode;
  cssClass?: string;
};

export const TooltipComponent = ({
  children,
  content,
  cssClass,
}: TooltipType) => {
  return (
    <div className={[style.tooltip, cssClass ? ` ${cssClass}` : ""].join("")}>
      {children}
      <div className={style.content}>{content}</div>
    </div>
  );
};

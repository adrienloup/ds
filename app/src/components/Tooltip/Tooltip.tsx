import { ReactNode } from "react";
import { PositionType } from "../../models/Position";
import style from "./Tooltip.module.scss";

interface TooltipType {
  children: ReactNode;
  title?: string;
  text?: string;
  position?: PositionType;
}

export const Tooltip = ({
  title,
  text,
  position = "top",
  children,
}: TooltipType) => {
  return (
    <div className={style.tooltip} tabIndex={0}>
      {children}
      <div className={[style.box, ` ${style[position]}`].join("")}>
        {title && <div className={style.title}>{title}</div>}
        {text && <div className={style.text}>{text}</div>}
      </div>
    </div>
  );
};

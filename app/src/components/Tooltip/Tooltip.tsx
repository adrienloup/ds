import { KeyboardEvent, ReactNode } from "react";
import { PositionType } from "../../models/Position";
import style from "./Tooltip.module.scss";

interface TooltipProps {
  children: ReactNode;
  title?: string;
  text?: string;
  position?: PositionType;
  onKeyDown?: () => void;
}

export const Tooltip = ({
  title,
  text,
  position = "top",
  children,
  onKeyDown = () => {},
}: TooltipProps) => {
  const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") onKeyDown();
  };

  return (
    <div
      role="tooltip"
      tabIndex={0}
      className={style.tooltip}
      onKeyDown={(e) => handleOnKeyDown(e)}
    >
      {children}
      <div className={[style.box, ` ${style[position]}`].join("")}>
        {title && <div className={style.title}>{title}</div>}
        {text && <div className={style.text}>{text}</div>}
      </div>
    </div>
  );
};

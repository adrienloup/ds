import { ForwardedRef, KeyboardEvent, ReactNode } from "react";
import { PositionType } from "../../models/Position";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  children: ReactNode;
  title?: string;
  text?: string;
  position?: PositionType;
  innerRef?: ForwardedRef<HTMLDivElement>;
  onKeyDown?: () => void;
}

export const Tooltip = ({
  title,
  text,
  position = "top",
  children,
  innerRef,
  onKeyDown = () => {},
}: TooltipProps) => {
  const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") onKeyDown();
  };

  return (
    <div
      role="tooltip"
      ref={innerRef}
      tabIndex={0}
      className={styles.tooltip}
      onKeyDown={(e) => handleOnKeyDown(e)}
    >
      {children}
      <div className={[styles.box, ` ${styles[position]}`].join("")}>
        {title && <div className={styles.title}>{title}</div>}
        {text && <div className={styles.text}>{text}</div>}
      </div>
    </div>
  );
};

import { CSSProperties, ReactNode } from "react";
import style from "./Badge.module.scss";

function valueMax(value: number, max: number) {
  return value > max ? `${max}+` : `${value}`;
}

type BadgeProps = {
  children: ReactNode;
  value?: number;
  max?: number;
  status?: "info" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
  cssClass?: string;
  style?: CSSProperties;
};

export const DsBadge = ({
  children,
  value = 0,
  max = 99,
  status = "info",
  size = "medium",
  ariaLabel,
  cssClass,
  ...rest
}: BadgeProps) => {
  return (
    <span
      aria-label={ariaLabel}
      className={[
        style.badge,
        ` ${style[status]}`,
        ` ${style[size]}`,
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
    >
      <span className={style.content} {...rest}>
        {valueMax(value, max)}
      </span>
      {children}
    </span>
  );
};

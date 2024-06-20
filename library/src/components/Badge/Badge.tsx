import { CSSProperties, ReactNode } from "react";
import "./Badge.scss";

function valueMax(value: number, max: number) {
  return value > max ? `${max}+` : `${value}`;
}

export interface DsBadgeType {
  children: ReactNode;
  value?: number;
  max?: number;
  status?: "info" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
  cssClass?: string;
  style?: CSSProperties;
}

export const DsBadge = ({
  children,
  value = 0,
  max = 9,
  status = "info",
  size = "medium",
  ariaLabel,
  cssClass,
  ...rest
}: DsBadgeType) => {
  return (
    <span
      aria-label={ariaLabel}
      className={[
        "ds-badge",
        ` ds-badge-${status}`,
        ` ds-badge-${size}`,
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
    >
      <span className={"ds-badge_content"} {...rest}>
        {valueMax(value, max)}
      </span>
      {children}
    </span>
  );
};

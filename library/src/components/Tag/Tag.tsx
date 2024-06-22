import { ReactNode } from "react";
import "./Tag.scss";

export interface DsTagType {
  children: ReactNode;
  variant?: string;
  color?: "cyan" | "blue" | "magenta";
  size?: "small" | "medium" | "large";
}

export const DsTag = ({
  children,
  variant = "contained",
  color = "cyan",
  size = "medium",
}: DsTagType) => {
  return (
    <span
      className={[
        `ds-tag`,
        ` ds-tag-${variant}`,
        ` ds-tag-${color}`,
        ` ds-tag-${size}`,
      ].join("")}
    >
      {children}
    </span>
  );
};

import { ReactNode } from "react";
import style from "./Tag.module.scss";

type TagProps = {
  children: ReactNode;
  variant?: string;
  color?: "cyan" | "blue" | "magenta";
  size?: "small" | "medium" | "large";
};

export const DsTag = ({
  children,
  variant = "contained",
  color = "cyan",
  size = "medium",
}: TagProps) => {
  return (
    <span
      className={[
        `${style.tag}`,
        ` ${style[variant]}`,
        ` ${style[color]}`,
        ` ${style[size]}`,
      ].join("")}
    >
      {children}
    </span>
  );
};

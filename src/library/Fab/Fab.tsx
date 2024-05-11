import { ReactNode } from "react";
import style from "./Fab.module.scss";

type FabProps = {
  children: ReactNode;
  variant?: "contained";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
  cssClass?: string;
  href?: string;
  onClick?: () => void;
};

export const DsFab = ({
  children,
  variant = "contained",
  size = "medium",
  type = "button",
  ariaLabel,
  disabled = false,
  cssClass,
  href,
  onClick = () => {},
}: FabProps) => {
  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className={[
        style.fab,
        ` ${style[variant]}`,
        ` ${style[size]}`,
        disabled ? ` ${style.disabled}` : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
    >
      {children}
    </a>
  );
  const button = (
    <button
      type={type}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className={[
        style.fab,
        ` ${style[variant]}`,
        ` ${style[size]}`,
        disabled ? ` ${style.disabled}` : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
      onClick={onClick}
    >
      {children}
    </button>
  );
  return href ? a : button;
};

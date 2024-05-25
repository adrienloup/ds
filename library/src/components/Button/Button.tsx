import { ReactNode } from "react";
import style from "./Button.module.scss";

type ButtonType = {
  children: ReactNode;
  variant?: string;
  status?: "info" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
  cssClass?: string;
  href?: string;
  onClick?: () => void;
};

export const DsButton = ({
  children,
  variant = "contained",
  status,
  size = "medium",
  type = "button",
  ariaLabel,
  disabled = false,
  cssClass,
  href,
  onClick = () => {},
}: ButtonType) => {
  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className={[
        style["ds-button"],
        ` ${style[variant]}`,
        ` ${style[size]}`,
        status ? ` ${style[status]}` : "",
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
        style["ds-button"],
        ` ${style[variant]}`,
        ` ${style[size]}`,
        status ? ` ${style[status]}` : "",
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

import { ReactNode } from "react";
import "./Button.scss";

export interface DsButtonType {
  children: ReactNode;
  variant?: string;
  status?: "info" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
  cssClass?: string;
  href?: string;
  buttonProps?: {};
  onClick?: () => void;
}

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
  buttonProps,
  onClick = () => {},
}: DsButtonType) => {
  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className={[
        "ds-button",
        ` ds-button-${variant}`,
        ` ds-button-${size}`,
        ,
        status ? ` ds-button-${status}` : "",
        disabled ? ` ds-button-disabled` : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
      {...buttonProps}
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
        "ds-button",
        ` ds-button-${variant}`,
        ` ds-button-${size}`,
        ,
        status ? ` ds-button-${status}` : "",
        disabled ? ` ds-button-disabled` : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
      onClick={onClick}
      {...buttonProps}
    >
      {children}
    </button>
  );
  return href ? a : button;
};

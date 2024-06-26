import { ReactNode } from "react";
import "./Fab.scss";

export interface DsFabProps {
  children: ReactNode;
  variant?: "contained";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
  cssClass?: string;
  href?: string;
  buttonProps?: {};
  onClick?: () => void;
}

export const DsFab = ({
  children,
  variant = "contained",
  size = "medium",
  type = "button",
  ariaLabel,
  disabled = false,
  cssClass,
  href,
  buttonProps,
  onClick = () => {},
}: DsFabProps) => {
  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      className={[
        "ds-fab",
        ` ds-fab-${variant}`,
        ` ds-fab-${size}`,
        ,
        disabled ? ` ds-fab-disabled` : "",
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
        "ds-fab",
        ` ds-fab-${variant}`,
        ` ds-fab-${size}`,
        ,
        disabled ? ` ds-fab-disabled` : "",
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

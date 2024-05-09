import { ReactNode } from "react";
import style from "./Button.module.scss";

type ButtonType = {
  children: ReactNode;
  cssClass?: string;
  ariaLabel?: string;
  href?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  cssClass,
  ariaLabel,
  href,
  onClick = () => {},
}: ButtonType) => {
  const a = (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {children}
    </a>
  );
  const button = (
    <button
      type="button"
      aria-label={ariaLabel}
      className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
      onClick={onClick}
    >
      {children}
    </button>
  );
  return href ? a : button;
};

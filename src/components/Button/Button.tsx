import { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

type ButtonType = {
  children: ReactNode;
  cssClass?: string;
  ariaLabel?: string;
  href?: string;
  to?: string;
  onClick?: () => void;
};

export const ButtonComponent = ({
  children,
  cssClass,
  ariaLabel,
  href,
  to,
  onClick = () => {},
}: ButtonType) => {
  const link = (
    <Link
      to={to as string}
      aria-label={ariaLabel}
      className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {children}
    </Link>
  );

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

  return href ? a : to ? link : button;
};

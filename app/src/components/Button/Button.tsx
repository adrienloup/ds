import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

type ButtonType = {
  children: ReactNode;
  cssClass?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const Button = memo(
  ({
    children,
    cssClass,
    type = "button",
    ariaLabel,
    href,
    to,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
  }: ButtonType) => {
    // console.log("Button");
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
        type={type}
        aria-label={ariaLabel}
        className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);

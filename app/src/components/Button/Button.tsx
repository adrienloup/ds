import {
  ButtonHTMLAttributes,
  LinkHTMLAttributes,
  memo,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { RefType } from "../../models/Ref";
import styles from "./Button.module.scss";

type HTMLAttributes<A> = ButtonHTMLAttributes<A> & LinkHTMLAttributes<A>;

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  children: ReactNode;
  cssClass?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  to?: string;
  innerRef?: RefType<HTMLButtonElement>;
}

export const Button = memo(
  ({
    children,
    cssClass,
    type = "button",
    href,
    to,
    innerRef,
    ...rest
  }: ButtonProps) => {
    // console.log("Button");
    const link = (
      <Link
        to={to!}
        className={[styles.button, cssClass ? ` ${cssClass}` : ""].join("")}
      >
        {children}
      </Link>
    );

    const a = (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={[styles.button, cssClass ? ` ${cssClass}` : ""].join("")}
        {...rest}
      >
        {children}
      </a>
    );

    const button = (
      <button
        ref={innerRef}
        type={type}
        className={[styles.button, cssClass ? ` ${cssClass}` : ""].join("")}
        {...rest}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);

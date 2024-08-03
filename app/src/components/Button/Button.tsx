import {
  ButtonHTMLAttributes,
  ForwardedRef,
  LinkHTMLAttributes,
  memo,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type HTMLAttributes<A> = ButtonHTMLAttributes<A> & LinkHTMLAttributes<A>;

interface ButtonProps<F>
  extends HTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  children: ReactNode;
  cssClass?: string;
  type?: "button" | "submit" | "reset";
  innerRef?: ForwardedRef<F>;
  href?: string;
  to?: string;
  tabIndex?: number;
}

export const Button = memo(
  ({
    children,
    cssClass,
    type = "button",
    innerRef,
    href,
    to,
    tabIndex,
    ...rest
  }: ButtonProps<HTMLButtonElement | HTMLAnchorElement>) => {
    // console.log("Button");

    const link = (
      <Link
        ref={innerRef as ForwardedRef<HTMLAnchorElement>}
        to={to as string}
        className={[styles.button, cssClass ? ` ${cssClass}` : ""].join("")}
      >
        {children}
      </Link>
    );

    const a = (
      <a
        ref={innerRef as ForwardedRef<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener"
        tabIndex={tabIndex}
        className={[styles.button, cssClass ? ` ${cssClass}` : ""].join("")}
        {...rest}
      >
        {children}
      </a>
    );

    const button = (
      <button
        ref={innerRef as ForwardedRef<HTMLButtonElement>}
        type={type}
        tabIndex={tabIndex}
        className={[styles.button, cssClass ? ` ${cssClass}` : ""].join("")}
        {...rest}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);

import {
  ButtonHTMLAttributes,
  ForwardedRef,
  LinkHTMLAttributes,
  memo,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

type HTMLAttributes<A> = ButtonHTMLAttributes<A> & LinkHTMLAttributes<A>;

interface Button<F>
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
  }: Button<HTMLButtonElement & HTMLAnchorElement>) => {
    // console.log("Button");

    const link = (
      <Link
        ref={innerRef}
        to={to as string}
        className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
      >
        {children}
      </Link>
    );

    const a = (
      <a
        ref={innerRef}
        href={href}
        target="_blank"
        rel="noopener"
        tabIndex={tabIndex}
        className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
        {...rest}
      >
        {children}
      </a>
    );

    const button = (
      <button
        ref={innerRef}
        type={type}
        tabIndex={tabIndex}
        className={[style.button, cssClass ? ` ${cssClass}` : ""].join("")}
        {...rest}
      >
        {children}
      </button>
    );

    return href ? a : to ? link : button;
  }
);

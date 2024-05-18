import React, { ReactNode } from "react";
import style from "./Tabs.module.scss";

type TabsProps = {
  children: ReactNode;
  cssClass?: string;
  size?: "medium" | "large";
  title?: ReactNode;
};

const DsTabs = ({ children, cssClass, size = "medium", title }: TabsProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { size } as TabsProps);
    }
    return child;
  });

  return (
    <div
      className={[
        style.tabs,
        ` ${style[size]}`,
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
    >
      {title && <div className={style.title}>{title}</div>}
      {childrenWithProps}
    </div>
  );
};

export { DsTabs };

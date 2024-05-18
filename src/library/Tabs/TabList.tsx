import React, { ReactNode } from "react";
import style from "./Tabs.module.scss";

type TabListProps = {
  children: ReactNode;
  labelledby?: string;
  size?: "medium" | "large";
};

const DsTabList = ({ children, labelledby, size = "medium" }: TabListProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { size } as TabListProps);
    }
    return child;
  });

  return (
    <div
      role="tablist"
      aria-labelledby={labelledby}
      className={[style.tablist, ` ${style[size]}`].join("")}
    >
      {childrenWithProps}
    </div>
  );
};

export { DsTabList };

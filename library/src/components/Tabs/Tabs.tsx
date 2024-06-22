import React, { ReactNode, useRef, useState } from "react";
import { DsTab } from "./Tab";
import "./Tabs.scss";

export interface DsTabsType {
  children: ReactNode;
  size?: "small" | "medium";
  alignment?: "left" | "center" | "right";
  disabled?: boolean;
  cssClass?: string;
}

export const DsTabs = ({
  children,
  size = "medium",
  alignment = "left",
  cssClass,
}: DsTabsType) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<HTMLButtonElement[] | null>([]);
  const childrenCount = React.Children.count(children);

  const focusTab = (index: number) => {
    if (tabRefs.current) tabRefs.current[index].focus();
  };

  const selectedTab = (index: number, el: HTMLButtonElement | null) => {
    if (tabRefs.current && el) tabRefs.current[index] = el;
  };

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    focusTab(index);
  };

  const handleKeyDown = (event: { key: string }, index: number) => {
    let newIndex = index;
    switch (event.key) {
      case "ArrowRight":
        newIndex = (index + 1) % childrenCount;
        break;
      case "ArrowLeft":
        newIndex = (index - 1 + childrenCount) % childrenCount;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = childrenCount - 1;
        break;
      default:
        break;
    }
    setSelectedIndex(newIndex);
    focusTab(newIndex);
  };

  return (
    <div
      className={[
        "ds-tabs",
        ` ds-tabs--size-${size}`,
        ` ds-tabs--alignment-${alignment}`,
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
    >
      <div role="tablist" className="ds-tablist" aria-label="Sample Tabs">
        {React.Children.map(
          children as {
            props: {
              title: string;
              ariaLabel: string;
              disabled: boolean;
            };
          },
          (
            child: {
              props: {
                title: string;
                ariaLabel: string;
                disabled: boolean;
              };
            },
            index
          ) => (
            <DsTab
              key={index}
              id={`tab-${index}`}
              tabRef={(el: HTMLButtonElement | null) => selectedTab(index, el)}
              isSelected={selectedIndex === index}
              controls={`tabpanel-${index}`}
              ariaLabel={child.props.ariaLabel}
              disabled={child.props.disabled}
              onClick={() => handleClick(index)}
              onKeyDown={(event: { key: string }) =>
                handleKeyDown(event, index)
              }
            >
              {child.props.title}
            </DsTab>
          )
        )}
      </div>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          id={`tabpanel-${index}`}
          role="tabpanel"
          className={[
            "ds-tabpanel",
            selectedIndex === index ? " ds-tabpanel--selected" : "",
          ].join("")}
          aria-labelledby={`tab-${index}`}
          tabIndex={0}
        >
          {selectedIndex === index && child}
        </div>
      ))}
    </div>
  );
};

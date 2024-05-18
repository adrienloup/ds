import { ReactNode } from "react";
import style from "./Tabs.module.scss";

type TabProps = {
  controls: string;
  id: string;
  selected: boolean;
  size?: "medium" | "large";
  content: ReactNode;
  handleClick: () => void;
};

const DsTab = ({
  controls,
  id,
  selected = false,
  size = "medium",
  content,
  handleClick = () => {},
}: TabProps) => {
  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={controls}
      className={[
        style.tab,
        ` ${style[size]}`,
        selected ? ` ${style.selected}` : "",
      ].join("")}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export { DsTab };

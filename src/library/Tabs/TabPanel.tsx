import { ReactNode } from "react";
import style from "./Tabs.module.scss";

type TabpanelProps = {
  id: string;
  labelledby: string;
  selected: boolean;
  size?: "medium" | "large";
  content: ReactNode;
};

const DsTabPanel = ({
  id,
  labelledby,
  selected,
  size = "medium",
  content,
}: TabpanelProps) => {
  return (
    <>
      {selected && (
        <div
          id={id}
          role="tabpanel"
          aria-labelledby={labelledby}
          className={[
            style.tabpanel,
            ` ${style[size]}`,
            selected ? ` ${style.selected}` : "",
          ].join("")}
        >
          <div className={style.inner}>{content}</div>
        </div>
      )}
    </>
  );
};

export { DsTabPanel };

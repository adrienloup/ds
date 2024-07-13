import { ReactNode, useEffect, useRef, useState, useId } from "react";
import { Icon } from "../Icon/Icon";
import style from "./Accordion.module.scss";

type AccordionProps = {
  title: ReactNode;
  panel: ReactNode;
  expanded: boolean;
  onClick: () => void;
};

export const Accordion = ({
  title,
  panel,
  expanded,
  onClick,
}: AccordionProps) => {
  // console.log("Accordion");
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const panelId = useId();
  const [animated, setAnimated] = useState(false);

  const handleResize = () => {
    if (!ref.current) return;
    ref.current.style.marginTop = `${
      expanded ? 0 : -(ref.current.offsetHeight + 1)
    }px`;
  };

  useEffect(() => {
    if (expanded) setAnimated(true);
  }, [expanded]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => handleResize());

  return (
    <div
      className={[style.accordion, expanded ? ` ${style.expanded}` : ""].join(
        ""
      )}
    >
      <button
        id={titleId}
        type="button"
        aria-controls={panelId}
        className={style.title}
        onClick={() => (onClick(), setAnimated(true))}
      >
        {title}
        <Icon
          cssClass={style.icon}
          name={expanded ? "arrow_drop_up" : "arrow_drop_down"}
        />
      </button>
      <div
        ref={ref}
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        className={[
          style.panel,
          expanded || animated ? ` ${style.animated}` : "",
        ].join("")}
      >
        {panel}
      </div>
    </div>
  );
};

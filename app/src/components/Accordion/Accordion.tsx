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
  console.log("Accordion");

  const [isAnimated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const panelId = useId();

  const onResize = () => {
    if (!ref.current) return;
    ref.current.style.marginTop = `${
      expanded ? 0 : -(ref.current.offsetHeight + 1)
    }px`;
  };

  useEffect(() => {
    if (expanded) setAnimated(true);
  }, [expanded]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  useEffect(() => onResize());

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
        onClick={() => {
          onClick(), setAnimated(true);
        }}
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
          expanded || isAnimated ? ` ${style.animated}` : "",
        ].join("")}
      >
        {panel}
      </div>
    </div>
  );
};

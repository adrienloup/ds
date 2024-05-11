import { ReactNode, useEffect, useRef, useState, useId } from "react";
import { IconComponent } from "../Icon/Icon";
import style from "./Accordion.module.scss";

type AccordionProps = {
  title: ReactNode;
  panel: ReactNode;
  expanded: boolean;
  onClick: () => void;
};

export const AccordionComponent = ({
  title = "No title",
  panel = "No Panel",
  expanded,
  onClick,
}: AccordionProps) => {
  const [isAnimated, setAnimated] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const panelId = useId();

  useEffect(() => {
    if (expanded) setAnimated(true);
  }, [expanded]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  useEffect(() => onResize());

  const onResize = () => {
    if (!ref.current) return;
    ref.current.style.marginTop = `${
      expanded ? 0 : -(ref.current.offsetHeight + 1)
    }px`;
  };

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
        <IconComponent
          cssClass={style.icon}
          name={expanded ? "expand_less" : "expand_more"}
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

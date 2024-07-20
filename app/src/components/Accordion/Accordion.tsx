import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useId,
  HTMLAttributes,
} from "react";
import { Icon } from "../Icon/Icon";
import style from "./Accordion.module.scss";

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode;
  panel: ReactNode;
  expanded: boolean;
  onClick: () => void;
}

export const Accordion = ({
  trigger,
  panel,
  expanded,
  onClick,
  ...rest
}: AccordionProps) => {
  // console.log("Accordion");
  const ref = useRef<HTMLDivElement>(null);
  const triggerId = useId();
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
      {...rest}
    >
      <button
        id={triggerId}
        type="button"
        aria-controls={panelId}
        className={style.trigger}
        onClick={() => (onClick(), setAnimated(true))}
      >
        {trigger}
        <Icon
          cssClass={style.icon}
          name={expanded ? "arrow_drop_up" : "arrow_drop_down"}
        />
      </button>
      <div
        ref={ref}
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
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

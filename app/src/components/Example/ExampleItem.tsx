import { useEffect, useRef } from "react";
import style from "./Example.module.scss";
import { Icon } from "../Icon/Icon";

export const ExampleItem = ({
  title,
  text,
}: {
  title: string;
  text?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        ref.current?.classList.toggle(style.active, entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={style.example}>
      <span className={style.title}>{title}</span>
      {text && <span className={style.text}>{text}</span>}
      <Icon name="trending_flat" cssClass={style.icon} />
    </div>
  );
};

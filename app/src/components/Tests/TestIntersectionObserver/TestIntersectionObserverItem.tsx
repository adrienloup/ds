import { useEffect, useRef } from "react";
import "./TestIntersectionObserverItem.scss";

export function TestIntersectionObserverItem({ title }: { title: string }) {
  console.log("TestIntersectionObserverItem");

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        ref.current?.classList.toggle("active", entries[0].isIntersecting);
      },
      { threshold: 1.0 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={"item"}>
      {title}
    </div>
  );
}

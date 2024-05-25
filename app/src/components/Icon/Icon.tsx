import { memo } from "react";
import style from "./Icon.module.scss";

interface IconType {
  name: string;
  cssClass?: string;
}

export const Icon = memo(({ name, cssClass }: IconType) => {
  return (
    <span
      aria-hidden={false}
      className={[style.icon, cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {name}
    </span>
  );
});

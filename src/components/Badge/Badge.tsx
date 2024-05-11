import { ReactNode } from "react";
import style from "./Badge.module.scss";

type BadgeType = {
  children: ReactNode;
  cssClass?: string;
  max?: number;
  value?: number;
};

export const BadgeComponent = ({
  children,
  cssClass,
  max = 99,
  value = 0,
}: BadgeType) => {
  const valueMax = (value: number, max: number) =>
    value > max ? `${max}+` : `${value}`;

  return (
    <div className={[style.badge, cssClass ? ` ${cssClass}` : ""].join("")}>
      <span className={style.content}>{valueMax(value, max)}</span>
      {children}
    </div>
  );
};

import { ReactNode } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  children: ReactNode;
  cssClass?: string;
  max?: number;
  value?: number;
}

export const Badge = ({
  children,
  cssClass,
  max = 99,
  value = 0,
}: BadgeProps) => {
  const valueMax = (value: number, max: number) =>
    value > max ? `${max}+` : `${value}`;

  return (
    <div className={[styles.badge, cssClass ? ` ${cssClass}` : ""].join("")}>
      {value > 0 && (
        <span className={styles.content}>{valueMax(value, max)}</span>
      )}
      {children}
    </div>
  );
};

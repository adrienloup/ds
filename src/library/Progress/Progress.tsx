import { useId } from "react";
import style from "./Progress.module.scss";

type ProgressProps = {
  value: number;
  title?: string;
  size?: "medium" | "large";
  display?: "circular" | "linear";
};

export const DsProgress = ({
  title,
  size = "medium",
  display = "linear",
  value,
}: ProgressProps) => {
  const uId = useId();
  const formatedValue: number = Math.abs(value);
  const thickness = size === "large" ? 10 : 7;
  const diameter = size === "large" ? 100 : 70;
  const strokeDasharray = ((diameter - thickness) / 2) * Math.PI * 2;
  const strokeDashoffset =
    strokeDasharray - (strokeDasharray * formatedValue) / 100;

  return (
    <div
      className={[
        `${style.progress}`,
        ` ${style[size]}`,
        ` ${style[display]}`,
      ].join("")}
    >
      {display === "linear" ? (
        <div className={style.inner}>
          <span className={style.value}>{formatedValue}%</span>
          <div
            className={style.progressbar}
            role="progressbar"
            aria-labelledby={uId}
            aria-valuenow={formatedValue}
          >
            <div
              className={style.width}
              style={{ width: `${formatedValue}%` }}
            ></div>
          </div>
          <span id={uId} className={style.label}>
            {title}
          </span>
        </div>
      ) : (
        <>
          <div
            className={style.progressbar}
            role="progressbar"
            aria-labelledby={uId}
            aria-valuenow={formatedValue}
          >
            <svg
              className={style.svg}
              width={diameter}
              height={diameter}
              viewBox={`0 0 ${diameter} ${diameter}`}
            >
              <circle
                className={style.circle}
                cx={diameter / 2}
                cy={diameter / 2}
                r={(diameter - thickness) / 2}
                strokeWidth={`${thickness}px`}
              />
              <circle
                className={style.width}
                cx={diameter / 2}
                cy={diameter / 2}
                r={(diameter - thickness) / 2}
                strokeWidth={`${thickness}px`}
                transform={`rotate(-90 ${diameter / 2} ${diameter / 2})`}
                style={{
                  strokeDasharray: strokeDasharray,
                  strokeDashoffset: strokeDashoffset,
                }}
              />
            </svg>
            <span className={style.value}>{formatedValue}%</span>
          </div>
          <span id={uId} className={style.label}>
            {title}
          </span>
        </>
      )}
    </div>
  );
};

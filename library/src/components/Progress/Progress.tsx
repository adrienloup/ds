import { useId } from "react";
import "./Progress.scss";

export interface DsProgressType {
  value: number;
  title?: string;
  size?: "medium" | "large";
  display?: "circular" | "linear";
}

export const DsProgress = ({
  title,
  size = "medium",
  display = "linear",
  value,
}: DsProgressType) => {
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
        "ds-progress",
        ` ds-progress-${display}`,
        ` ds-progress-${size}`,
      ].join("")}
    >
      {display === "linear" ? (
        <div className="ds-progress_inner">
          <span className="ds-progress_value">{formatedValue}%</span>
          <div
            className="ds-progress_progressbar"
            role="progressbar"
            aria-labelledby={uId}
            aria-valuenow={formatedValue}
          >
            <div
              className="ds-progress_width"
              style={{ width: `${formatedValue}%` }}
            ></div>
          </div>
          <span id={uId} className="ds-progress_label">
            {title}
          </span>
        </div>
      ) : (
        <>
          <div
            className="ds-progress_progressbar"
            role="progressbar"
            aria-labelledby={uId}
            aria-valuenow={formatedValue}
          >
            <svg
              className="ds-progress_svg"
              width={diameter}
              height={diameter}
              viewBox={`0 0 ${diameter} ${diameter}`}
            >
              <circle
                className="ds-progress_circle"
                cx={diameter / 2}
                cy={diameter / 2}
                r={(diameter - thickness) / 2}
                strokeWidth={`${thickness}px`}
              />
              <circle
                className="ds-progress_width"
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
            <span className="ds-progress_value">{formatedValue}%</span>
          </div>
          <span id={uId} className="ds-progress_label">
            {title}
          </span>
        </>
      )}
    </div>
  );
};

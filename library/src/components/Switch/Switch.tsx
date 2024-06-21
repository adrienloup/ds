import { useId, useState } from "react";
import "./Switch.scss";

export interface DsSwitchType {
  label?: string;
  ariaLabel?: string;
  id?: string;
  cssClass?: string;
  size?: "small" | "medium" | "large";
  checked?: boolean;
  disabled?: boolean;
}

export const DsSwitch = ({
  label,
  ariaLabel,
  id,
  cssClass,
  size = "medium",
  checked = false,
  disabled = false,
}: DsSwitchType) => {
  const [isChecked, setChecked] = useState<boolean>(checked);
  const uId = useId();

  return (
    <button
      type="button"
      role="switch"
      id={id ? id : uId}
      disabled={disabled}
      aria-checked={isChecked}
      aria-label={ariaLabel}
      className={[
        "ds-switch",
        ` ds-switch-${size}`,
        disabled ? " ds-switch-disabled" : "",
        isChecked ? " ds-switch-checked" : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <span
        className="ds-switch_label"
        dangerouslySetInnerHTML={{
          __html: label as string | TrustedHTML,
        }}
      ></span>
      <span aria-hidden="true" className="ds-switch_inner">
        <span className="ds-switch_on"></span>
        <span className="ds-switch_off"></span>
      </span>
    </button>
  );
};

import { useId, useState } from "react";
import style from "./Switch.module.scss";

type SwitchProps = {
  label?: string;
  ariaLabel?: string;
  id?: string;
  cssClass?: string;
  size?: "small" | "medium" | "large";
  checked?: boolean;
  disabled?: boolean;
};

export const DsSwitch = ({
  label,
  ariaLabel,
  id,
  cssClass,
  size = "medium",
  checked = false,
  disabled = false,
}: SwitchProps) => {
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
        `${style.switch}`,
        ` ${style[size]}`,
        cssClass ? ` ${cssClass}` : "",
        disabled ? ` ${style.disabled}` : "",
        isChecked ? ` ${style.checked}` : "",
      ].join("")}
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <span
        className={style.label}
        dangerouslySetInnerHTML={{
          __html: label as string | TrustedHTML,
        }}
      ></span>
      <span aria-hidden="true" className={style.inner}>
        <span className={style.on}></span>
        <span className={style.off}></span>
      </span>
    </button>
  );
};

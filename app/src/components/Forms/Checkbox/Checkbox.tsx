import { useId } from "react";
import style from "./Checkbox.module.scss";

interface CheckboxType {
  cssClass?: string;
  checked: boolean;
  label: string;
  onChange: (e: boolean) => void;
}

export const Checkbox = ({
  cssClass,
  checked = false,
  label,
  onChange,
}: CheckboxType) => {
  const id = useId();

  return (
    <div className={[style.checkbox, cssClass ? ` ${cssClass}` : ""].join("")}>
      <input
        id={id}
        type="checkbox"
        className={style.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
    </div>
  );
};

import { useId } from "react";
import style from "./Checkbox.module.scss";

type CheckboxType = {
  id?: string;
  cssClass?: string;
  checked: boolean;
  label?: string;
  onChange: (e: { target: { checked: boolean } }) => void;
};

export const Checkbox = ({
  id,
  cssClass,
  checked = false,
  label,
  onChange,
}: CheckboxType) => {
  const uId = useId();

  return (
    <div className={[style.checkbox, cssClass ? ` ${cssClass}` : ""].join("")}>
      <input
        id={id ? id : uId}
        type="checkbox"
        className={style.input}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id ? id : uId} className={style.label}>
        <span className={style.check}></span>
        {label}
      </label>
    </div>
  );
};

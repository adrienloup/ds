import { useId, useState } from "react";
import { FormField } from "../FormField/FormField";
import { Icon } from "../../Icon/Icon";
import style from "./TextField.module.scss";

type TextFieldType = {
  cssClass?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  status?: "info" | "success" | "warning" | "error";
  onChange: (e: { target: { value: string } }) => void;
};

export const TextField = ({
  cssClass,
  id,
  label,
  placeholder = "Placeholder",
  helperText,
  errorMessage,
  value,
  prefix,
  suffix,
  status,
  onChange,
}: TextFieldType) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormField
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={[
          style.textfield,
          cssClass ? ` ${cssClass}` : "",
          focus ? ` ${style.focus}` : "",
          status ? ` ${style[status]}` : errorMessage ? ` ${style.error}` : "",
        ].join("")}
      >
        {prefix && <Icon name={prefix} cssClass={style.icon} />}
        <input
          type="text"
          id={id ? id : uId}
          className={style.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {suffix && <Icon name={suffix} cssClass={style.icon} />}
      </div>
    </FormField>
  );
};

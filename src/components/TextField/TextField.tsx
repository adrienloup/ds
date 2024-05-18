import { useState } from "react";
import { FormFieldComponent } from "../FormField/FormField";
import { IconComponent } from "../Icon/Icon";
import style from "./TextField.module.scss";

type TextFieldProps = {
  type?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  cssClass?: string;
  max?: number;
  prefix?: string;
  suffix?: string;
  status?: "info" | "success" | "warning" | "error";
  multiline?: boolean;
  cols?: number;
  rows?: number;
  onChange?(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
};

export const TextFieldComponent = ({
  type = "text",
  label,
  placeholder = "Placeholder",
  helperText,
  errorMessage,
  cssClass,
  max,
  prefix,
  suffix,
  status,
  multiline,
  cols = 20,
  rows = 5,
  onChange,
}: TextFieldProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <FormFieldComponent
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={[
          style.textfield,
          focus ? ` ${style.focus}` : "",
          status ? ` ${style[status]}` : errorMessage ? ` ${style.error}` : "",
        ].join("")}
      >
        {prefix && <IconComponent name={prefix} cssClass={style.icon} />}
        {multiline ? (
          <textarea
            placeholder={placeholder}
            className={[style.input, cssClass ? ` ${cssClass}` : ""].join("")}
            maxLength={max}
            cols={cols}
            rows={rows}
            onChange={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className={[style.input, cssClass ? ` ${cssClass}` : ""].join("")}
            maxLength={max}
            onChange={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        )}
        {suffix && <IconComponent name={suffix} cssClass={style.icon} />}
      </div>
    </FormFieldComponent>
  );
};

import { useState } from "react";
import { DsFormField } from "../FormField/FormField";
import { DsIcon } from "../Icon/Icon";
import style from "./TextField.module.scss";

type TextFieldProps = {
  type?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  max?: number;
  prefix?: string;
  suffix?: string;
  status?: "info" | "success" | "warning" | "error";
  multiline?: boolean;
  cols?: number;
  rows?: number;
  onChange?(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
};

export const DsTextField = ({
  type = "text",
  label,
  placeholder = "Placeholder",
  helperText,
  errorMessage,
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
    <DsFormField
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
        {prefix && <DsIcon name={prefix} cssClass={style.icon} />}
        {multiline ? (
          <textarea
            placeholder={placeholder}
            className={style.input}
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
            className={style.input}
            maxLength={max}
            onChange={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        )}
        {suffix && <DsIcon name={suffix} cssClass={style.icon} />}
      </div>
    </DsFormField>
  );
};

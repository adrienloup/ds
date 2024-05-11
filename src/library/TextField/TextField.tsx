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
  prefix?: string;
  suffix?: string;
  status?: "info" | "success" | "warning" | "error";
};

export const DsTextField = ({
  type = "text",
  label,
  placeholder = "Placeholder",
  helperText,
  errorMessage,
  prefix,
  suffix,
  status,
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
        <input
          type={type}
          placeholder={placeholder}
          className={style.input}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {suffix && <DsIcon name={suffix} cssClass={style.icon} />}
      </div>
    </DsFormField>
  );
};

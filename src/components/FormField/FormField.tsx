import { ReactNode } from "react";
import style from "./FormField.module.scss";

type FormFieldProps = {
  children: ReactNode;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  cssClass?: string;
};

export const FormFieldComponent = ({
  children,
  label,
  helperText,
  errorMessage,
  cssClass,
}: FormFieldProps) => {
  return (
    <div className={[style.formfield, cssClass ? ` ${cssClass}` : ""].join("")}>
      {label && <div className={style.label}>{label}</div>}
      {children}
      {errorMessage ? (
        <div className={style.errormessage}>{errorMessage}</div>
      ) : helperText ? (
        <div className={style.helpertext}>{helperText}</div>
      ) : null}
    </div>
  );
};

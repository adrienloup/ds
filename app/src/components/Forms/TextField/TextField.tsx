import { useId, useState } from "react";
import { StatusType } from "../../../models/Status";
import { FormField } from "../FormField/FormField";
import { Icon } from "../../Icon/Icon";
import styles from "./TextField.module.scss";

interface TextFieldProps {
  cssClass?: string[];
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  status?: StatusType;
  onChange: (e: { target: { value: string } }) => void;
}

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
}: TextFieldProps) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormField
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      cssClass={cssClass && cssClass![0]?.length > 0 ? ` ${cssClass![0]}` : ""}
    >
      <div
        className={[
          styles.textfield,
          cssClass && cssClass![1]?.length > 0 ? ` ${cssClass![1]}` : "",
          focus ? ` ${styles.focus}` : "",
          status
            ? ` ${styles[status]}`
            : errorMessage
              ? ` ${styles.error}`
              : "",
        ].join("")}
      >
        {prefix && <Icon name={prefix} cssClass={styles.icon} />}
        <input
          type="text"
          id={id ? id : uId}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {suffix && <Icon name={suffix} cssClass={styles.icon} />}
      </div>
    </FormField>
  );
};

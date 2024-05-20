import style from "./TextField.module.scss";

interface TextFieldType {
  cssClass?: string;
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
}

export const TextField = ({
  cssClass,
  placeholder = "Placeholder",
  value,
  onChange,
}: TextFieldType) => {
  return (
    <div className={[style.textfield, cssClass ? ` ${cssClass}` : ""].join("")}>
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

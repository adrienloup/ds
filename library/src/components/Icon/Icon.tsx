import style from "./Icon.module.scss";

interface IconType {
  name: string;
  cssClass?: string;
}

export const DsIcon = ({ name, cssClass }: IconType) => {
  return (
    <span
      aria-hidden={false}
      className={[style["ds-icon"], cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {name}
    </span>
  );
};

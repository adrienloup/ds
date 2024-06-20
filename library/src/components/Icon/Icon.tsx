import style from "./Icon.module.scss";

export interface DsIconType {
  name: string;
  cssClass?: string;
}

export const DsIcon = ({ name, cssClass }: DsIconType) => {
  return (
    <span
      aria-hidden={false}
      className={[style["ds-icon"], cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {name}
    </span>
  );
};

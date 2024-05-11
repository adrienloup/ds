import style from "./Icon.module.scss";

export type IconType = {
  name: string;
  cssClass?: string;
};

export const IconComponent = ({ name, cssClass }: IconType) => {
  return (
    <span
      aria-hidden={false}
      className={[style.icon, cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {name}
    </span>
  );
};

import style from "./Icon.module.scss";

type IconProps = {
  name: string;
  ariaLabel?: string;
  cssClass?: string;
  size?: "small" | "medium" | "large";
};

export const DsIcon = ({ name, ariaLabel, cssClass, size }: IconProps) => {
  return (
    <span
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? false : true}
      className={[
        style.icon,
        size ? ` ${style[size]}` : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
    >
      {name}
    </span>
  );
};

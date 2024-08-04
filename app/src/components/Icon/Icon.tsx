import styles from "./Icon.module.scss";

interface IconProps {
  name: string;
  cssClass?: string;
}

export const Icon = ({ name, cssClass }: IconProps) => {
  // console.log("Icon");
  return (
    <span
      aria-hidden={false}
      className={[styles.icon, cssClass ? ` ${cssClass}` : ""].join("")}
    >
      {name}
    </span>
  );
};

import styles from "./Empty.module.scss";

interface EmptyProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  cssClass?: string;
}

export const Empty = ({ text, tag: Tag = "div", cssClass }: EmptyProps) => {
  return (
    <Tag className={[styles.empty, cssClass ? ` ${cssClass}` : ""].join("")}>
      {text}
    </Tag>
  );
};

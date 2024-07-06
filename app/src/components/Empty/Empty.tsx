import style from "./Empty.module.scss";

type EmptyType = {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  cssClass?: string;
};

export const Empty = ({ text, tag: Tag = "div", cssClass }: EmptyType) => {
  return (
    <Tag className={[style.empty, cssClass ? ` ${cssClass}` : ""].join("")}>
      {text}
    </Tag>
  );
};

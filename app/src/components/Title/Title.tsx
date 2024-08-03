import { SlotType } from "../../models/Slot";

interface TitleProps extends SlotType {
  tag?: keyof JSX.IntrinsicElements;
}

export const Title = ({ children, tag: Tag = "h1" }: TitleProps) => {
  // console.log("Title");
  return <Tag data-cy="title">{children}</Tag>;
};

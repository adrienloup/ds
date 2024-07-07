import { ReactNode } from "react";
import "./Typography.scss";

export interface DsTypographyType {
  children: ReactNode;
  variant: string;
  tag?: keyof JSX.IntrinsicElements;
}

export const DsTypography = ({ children, variant, tag }: DsTypographyType) => {
  const Tag = tag
    ? tag
    : variant === "body1" || "body2"
      ? "p"
      : (variant as keyof JSX.IntrinsicElements);

  return (
    <Tag className={["ds-typography", ` ds-typography-${variant}`].join("")}>
      {children}
    </Tag>
  );
};

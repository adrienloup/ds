import { ReactNode } from "react";
import "./Avatar.scss";

export interface DsAvatarType {
  alt?: string;
  src?: string;
  size?: "small" | "medium" | "large";
  children?: ReactNode;
}

export const DsAvatar = ({
  alt,
  src,
  size = "medium",
  children,
}: DsAvatarType) => {
  return (
    <div className={["ds-avatar", ` ds-avatar-${size}`].join("")}>
      {src && alt && <img src={src} alt={alt} />}
      {children && <span>{children}</span>}
    </div>
  );
};

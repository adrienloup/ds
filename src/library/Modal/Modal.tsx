import { CSSProperties, ReactNode } from "react";
import { DsButton } from "../Button/Button";
import { DsIcon } from "../Icon/Icon";
import style from "./Modal.module.scss";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  cssClass?: string;
  position?: string;
  maxWidth?: string;
  transition?: boolean;
  backdrop?: boolean;
  style?: CSSProperties;
  onClick: () => void;
};

export const DsModal = ({
  children,
  open,
  cssClass,
  position = "middle",
  maxWidth = "40rem",
  transition = true,
  backdrop = true,
  onClick,
  ...rest
}: ModalProps) => {
  return (
    <div
      className={[
        style.modal,
        ` ${style[position]}`,
        cssClass ? ` ${cssClass}` : "",
        transition ? ` ${style.transition}` : "",
        !backdrop ? ` ${style.border}` : "",
        open ? ` ${style.open}` : "",
      ].join("")}
      {...rest}
    >
      <div className={style.content} style={{ maxWidth: `${maxWidth}` }}>
        <div className={style.inner}>{children}</div>
        <DsButton
          cssClass={`${style.button} ${style.contained} ${style.small}`}
          onClick={onClick}
        >
          <DsIcon name="close" />
        </DsButton>
      </div>
      {backdrop && <div className={style.backdrop} onClick={onClick}></div>}
    </div>
  );
};

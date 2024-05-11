import { ReactNode } from "react";
import { ButtonComponent } from "../Button/Button";
import { IconComponent } from "../Icon/Icon";
import style from "./Modal.module.scss";

type ModalProps = {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  open: boolean;
  cssClass?: string;
  onClick: () => void;
};

export const ModalComponent = ({
  head,
  body,
  foot,
  open,
  cssClass,
  onClick,
}: ModalProps) => {
  return (
    <div
      className={[
        style.modal,
        cssClass ? ` ${cssClass}` : "",
        open ? ` ${style.open}` : "",
      ].join("")}
      style={{
        height: `${document.body.offsetHeight}px`,
      }}
    >
      <div className={style.content}>
        <ButtonComponent cssClass={style.close} onClick={onClick}>
          <IconComponent name="close" />
        </ButtonComponent>
        {head && <div className={style.head}>{head}</div>}
        {body && <div className={style.body}>{body}</div>}
        {foot && <div className={style.foot}>{foot}</div>}
      </div>
      <div className={style.backdrop} onClick={onClick}></div>
    </div>
  );
};

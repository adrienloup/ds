import { ReactNode } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Modal.module.scss";

type ModalType = {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  open: boolean;
  cssClass?: string;
  onClick: () => void;
};

export const Modal = ({
  head,
  body,
  foot,
  open,
  cssClass,
  onClick,
}: ModalType) => {
  // console.log("Modal");

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
        <Button cssClass={style.close} onClick={onClick}>
          <Icon name="close" />
        </Button>
        {head && <div className={style.head}>{head}</div>}
        {body && <div className={style.body}>{body}</div>}
        {foot && <div className={style.foot}>{foot}</div>}
      </div>
      <div className={style.backdrop} onClick={onClick}></div>
    </div>
  );
};

import { ReactNode, useEffect, useState } from "react";
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
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(document.body.offsetHeight);
      setTop(document.documentElement.scrollTop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={[
        style.modal,
        cssClass ? ` ${cssClass}` : "",
        open ? ` ${style.open}` : "",
      ].join("")}
      style={{
        height: `${height}px`,
      }}
    >
      <div
        className={style.content}
        style={{
          top: `${top}px`,
        }}
      >
        <Button data-cy="modal-close" cssClass={style.close} onClick={onClick}>
          <Icon name="close" />
        </Button>
        {head && <div className={style.head}>{head}</div>}
        {body && <div className={style.body}>{body}</div>}
        {foot && <div className={style.foot}>{foot}</div>}
      </div>
      <div
        data-cy="modal-backdrop"
        className={style.backdrop}
        onClick={onClick}
      ></div>
    </div>
  );
};

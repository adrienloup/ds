import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { RefType } from "../../models/Ref";
import { Button } from "../Button/Button";
import styles from "./Modal.module.scss";

interface ModalProps {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  open: boolean;
  cssClass?: string;
  targetRef?: RefType<HTMLDivElement | HTMLButtonElement>;
  onClick: () => void;
}

export const Modal = ({
  head,
  body,
  foot,
  open,
  cssClass,
  targetRef,
  onClick,
}: ModalProps) => {
  // console.log("Modal");
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  const handleClick = () => {
    onClick();
    targetRef?.current?.focus();
  };

  const contentKeyDown = useCallback(
    (e: {
      keyCode: number;
      shiftKey: boolean;
      target: EventTarget;
      preventDefault: () => void;
    }) => {
      const list = focusableElementsRef.current;

      if (e.keyCode === 9) {
        if (e.shiftKey) {
          if (e.target === list[0]) {
            e.preventDefault();
            list[list.length - 1].focus();
          }
        } else {
          if (e.target === list[list.length - 1]) {
            e.preventDefault();
            list[0].focus();
          }
        }
      }

      if (e.keyCode === 27) {
        onClick();
        targetRef?.current?.focus();
      }
    },
    []
  );

  const buttonKeyDown = useCallback(
    (e: { keyCode: number; preventDefault: () => void }) => {
      if (!buttonRef.current) return;
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        onClick();
        targetRef?.current?.focus();
      }
    },
    []
  );

  useEffect(() => {
    if (open && contentRef.current) {
      focusableElementsRef.current = Array.from(
        contentRef.current.querySelectorAll("button, a, input")
      );
      if (focusableElementsRef.current.length > 0) {
        setTimeout(() => focusableElementsRef.current[0].focus());
      }
    }
  }, [open]);

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
        styles.modal,
        cssClass ? ` ${cssClass}` : "",
        open ? ` ${styles.open}` : "",
      ].join("")}
      style={{
        height: `${height}px`,
      }}
    >
      <div
        ref={contentRef}
        className={styles.content}
        onKeyDown={contentKeyDown}
        style={{
          top: `${top}px`,
        }}
      >
        <Button
          innerRef={buttonRef}
          data-cy="modal-close"
          cssClass={styles.close}
          onClick={() => handleClick()}
          onKeyDown={buttonKeyDown}
        >
          esc
        </Button>
        {head && <div className={styles.head}>{head}</div>}
        {body && <div className={styles.body}>{body}</div>}
        {foot && <div className={styles.foot}>{foot}</div>}
      </div>
      <div
        data-cy="modal-backdrop"
        className={styles.backdrop}
        onClick={() => handleClick()}
      ></div>
    </div>
  );
};

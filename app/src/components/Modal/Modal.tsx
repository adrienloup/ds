import {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../Button/Button";
import styles from "./Modal.module.scss";

interface ModalProps {
  head?: ReactNode;
  body?: ReactNode;
  foot?: ReactNode;
  open: boolean;
  cssClass?: string;
  targetRef?: RefObject<HTMLElement>;
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
  const content = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const focusableElements = useRef<HTMLElement[]>([]);

  const handleClick = () => {
    onClick();
    targetRef?.current?.focus();
  };

  const handleKenDownContent = useCallback(
    (e: {
      keyCode: number;
      shiftKey: boolean;
      target: HTMLElement;
      preventDefault: () => void;
    }) => {
      if (!content.current) return;

      const list = focusableElements.current;

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

  const handleKeyDownButton = useCallback(
    (e: { keyCode: number; preventDefault: () => void }) => {
      if (!button.current) return;
      if (e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        onClick();
        targetRef?.current?.focus();
      }
    },
    []
  );

  useEffect(() => {
    if (open && content.current) {
      focusableElements.current = Array.from(
        content.current.querySelectorAll("button, a")
      );
      if (focusableElements.current.length > 0) {
        setTimeout(() => focusableElements.current[0].focus());
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
        ref={content}
        className={styles.content}
        onKeyDown={handleKenDownContent}
        style={{
          top: `${top}px`,
        }}
      >
        <Button
          innerRef={button}
          data-cy="modal-close"
          cssClass={styles.close}
          onClick={() => handleClick()}
          onKeyDown={handleKeyDownButton}
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

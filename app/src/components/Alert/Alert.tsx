import { CSSProperties, useEffect, useRef, useState } from "react";
import { setStatusIcon } from "../../utils/statusIcon";
import { AlertType } from "../../models/Alert";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import styles from "./Alert.module.scss";

export const Alert = ({
  text,
  title,
  status = "info",
  cssClass,
  timeout = 0,
  close = false,
  handleRemove = () => {},
}: AlertType) => {
  // console.log("Alert");
  const outTimer = useRef(0);
  const removeTimer = useRef(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (timeout > 0) {
      outTimer.current = setTimeout(() => {
        setOut(true);
      }, timeout * 1e3) as unknown as number;

      removeTimer.current = setTimeout(
        () => {
          handleRemove();
        },
        timeout * 1e3 + 150
      ) as unknown as number;
    }
    return () => {
      clearTimeout(outTimer.current);
      clearTimeout(removeTimer.current);
    };
  }, []);

  return (
    text?.length && (
      <div
        role="alert"
        className={[
          styles.alert,
          ` ${styles[status]}`,
          timeout > 0 ? ` ${styles.animate}` : "",
          out ? ` ${styles.out}` : "",
          cssClass ? ` ${cssClass}` : "",
        ].join("")}
        style={
          {
            "--timeout": `${timeout}ms`,
          } as CSSProperties
        }
      >
        <Icon cssClass={styles.icon} name={`${setStatusIcon(status)}`} />
        <div className={styles.content}>
          {title && <span className={styles.title}>{title}</span>}
          <p className={styles.text}>{text}</p>
        </div>
        {close && (
          <Button cssClass={styles.close} onClick={handleRemove}>
            <Icon name="close" />
          </Button>
        )}
        {timeout > 0 && (
          <div
            className={styles.progress}
            style={
              {
                "--timeout": `${timeout}s`,
              } as CSSProperties
            }
          ></div>
        )}
      </div>
    )
  );
};

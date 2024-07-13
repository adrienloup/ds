import { useEffect, useRef } from "react";
import { setStatusIcon } from "../../utils/statusIcon";
import { AlertType } from "../../models/Alert";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Alert.module.scss";

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
  const timerRef = useRef(0);

  useEffect(() => {
    if (timeout > 0 && handleRemove) {
      timerRef.current = setTimeout(() => {
        handleRemove();
      }, timeout * 1e3);
    }
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    text?.length && (
      <div
        role="alert"
        className={[
          style.alert,
          ` ${style[status]}`,
          timeout > 0 ? ` ${style.animate}` : "",
          cssClass ? ` ${cssClass}` : "",
        ].join("")}
        style={
          {
            "--timeout": `${timeout}ms`,
          } as React.CSSProperties
        }
      >
        <Icon cssClass={style.icon} name={`${setStatusIcon(status)}`} />
        <div className={style.inner}>
          {title && <span className={style.title}>{title}</span>}
          <p className={style.text}>{text}</p>
        </div>
        {close && (
          <Button cssClass={style.close} onClick={handleRemove}>
            <Icon name="close" />
          </Button>
        )}
        {timeout > 0 && (
          <div
            className={style.progress}
            style={
              {
                "--timeout": `${timeout}s`,
              } as React.CSSProperties
            }
          ></div>
        )}
      </div>
    )
  );
};

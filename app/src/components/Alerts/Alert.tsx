import { useEffect } from "react";
import { AlertType } from "../../models/Alert";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Alerts.module.scss";

const icon = (status: string) => {
  switch (status) {
    case "info":
      return "info";
    case "error":
      return "error";
    case "warning":
      return "warning";
    case "success":
      return "check_circle";
    default:
      return "info";
  }
};

export const Alert = ({
  text,
  title,
  status = "info",
  cssClass,
  timeout = 0,
  button = false,
  handleRemove = () => {},
}: AlertType) => {
  useEffect(() => {
    if (timeout > 0 && handleRemove) {
      const timer = setTimeout(() => {
        handleRemove();
      }, timeout * 1e3);
      return () => clearTimeout(timer);
    }
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
        <Icon cssClass={style.icon} name={`${icon(status)}`} />
        <div className={style.inner}>
          {title && <span className={style.title}>{title}</span>}
          <p className={style.text}>{text}</p>
        </div>
        {button && (
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

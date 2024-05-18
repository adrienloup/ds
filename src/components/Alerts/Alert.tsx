import { useEffect } from "react";
import { AlertType } from "../../models/Alert";
import { ButtonComponent } from "../Button/Button";
import { IconComponent } from "../Icon/Icon";
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

export const AlertComponent = ({
  text = "No content",
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
  }, [timeout]);

  return (
    text?.length && (
      <div
        role="alert"
        className={[
          style.alert,
          cssClass ? ` ${cssClass}` : "",
          timeout > 0 ? ` ${style.animate}` : "",
        ].join("")}
        style={
          {
            "--timeout": `${timeout}ms`,
          } as React.CSSProperties
        }
      >
        <IconComponent cssClass={style.icon} name={`${icon(status)}`} />
        <div className={style.inner}>
          {title && <span className={style.title}>{title}</span>}
          <p className={style.text}>{text}</p>
        </div>
        {button && (
          <ButtonComponent cssClass={style.close} onClick={handleRemove}>
            <IconComponent name="close" />
          </ButtonComponent>
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

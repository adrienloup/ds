import { ReactNode, useEffect } from "react";
import { DsButton } from "../Button/Button";
import { DsIcon } from "../Icon/Icon";
import style from "./Alert.module.scss";

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

type AlertsProps = {
  children: ReactNode;
};

type AlertProps = {
  text: string;
  id?: string;
  title?: string;
  size?: "small" | "medium" | "large";
  status?: "info" | "success" | "warning" | "error";
  cssClass?: string;
  timeout?: number;
  button?: boolean;
  handleRemove?: () => void;
};

const DsAlerts = ({ children }: AlertsProps) => {
  return <div className={style.alerts}>{children}</div>;
};

const DsAlert = ({
  text = "No content",
  title,
  size = "medium",
  status = "info",
  cssClass,
  timeout = 0,
  button = false,
  handleRemove = () => {},
}: AlertProps) => {
  useEffect(() => {
    if (timeout > 0 && handleRemove) {
      const timer = setTimeout(() => {
        handleRemove();
      }, timeout * 1e3);
      return () => clearTimeout(timer);
    }
  }, [timeout]);

  const removeAlert = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleRemove();
  };

  return (
    text?.length && (
      <div
        role="alert"
        className={[
          style.alert,
          ` ${style[size]}`,
          cssClass ? ` ${cssClass}` : "",
          status ? ` ${style[status]}` : "",
          timeout > 0 ? ` ${style.animate}` : "",
        ].join("")}
        style={
          {
            "--timeout": `${timeout}ms`,
          } as React.CSSProperties
        }
      >
        <DsIcon cssClass={style.icon} name={`${icon(status)}`} />
        <div className={style.inner}>
          {title && <span className={style.title}>{title}</span>}
          <p className={style.text}>{text}</p>
        </div>
        {button && (
          <DsButton
            cssClass={[style.button, ` ${style[size]}`].join("")}
            onClick={() => removeAlert}
            size={size}
            status={status}
          >
            <DsIcon name="close" />
          </DsButton>
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

export { DsAlerts, DsAlert };

import { useContext, useEffect, useState, useRef } from "react";
import { SettingsContext } from "../../contexts/Settings";
import { SettingsType } from "../../models/Settings";
import { useAlert } from "../../hooks/useAlert";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Settings.module.scss";

interface SettingsProps {
  open: boolean;
  onClick: () => void;
}

export const Settings = ({ open, onClick }: SettingsProps) => {
  console.log("Settings");

  const { addAlert } = useAlert();
  const { dataSettings, setDataSettings } =
    useContext<SettingsType>(SettingsContext);
  const [mode, setMode] = useState(dataSettings.mode);
  const asideRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMode = (mode: string) => {
    dataSettings.mode = mode;
    setDataSettings({ ...dataSettings });
    setMode(mode);
  };

  const onResize = () => {
    if (!asideRef.current || !innerRef.current) return;

    const height = innerRef.current.clientHeight;

    asideRef.current.style.height = height + "px";
    asideRef.current.style.top = `-${open ? height : height / 2}px`;

    document.getElementById("_ds_y0y09_10")!.style.paddingTop = `${
      open ? height : 0
    }px`;
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    onResize();
  }, [open]);

  return (
    <aside
      role="complementary"
      ref={asideRef}
      className={[style.settings, open ? ` ${style.open}` : ""].join("")}
    >
      <div ref={innerRef} className={style.inner}>
        <Button
          cssClass={[style.button, ` ${style.close}`].join("")}
          onClick={onClick}
        >
          <Icon name="close" />
        </Button>
        <div className={style.content}>
          <div className={style.mode}>
            <div className={style.title}>Mode</div>
            <Button
              cssClass={[
                `${style.button}`,
                mode === "dark" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleMode("dark")}
            >
              Dark
            </Button>
            <Button
              cssClass={[
                `${style.button}`,
                mode === "light" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleMode("light")}
            >
              Light
            </Button>
          </div>
          <div className={style.direction}>
            <div className={style.title}>Direction</div>
            <Button
              cssClass={[`${style.button}`, ` ${style.active}`].join("")}
              onClick={() => {
                addAlert({
                  text: "Error with the direction adjustment",
                  timeout: 3,
                  status: "error",
                });
              }}
            >
              Right to Left
            </Button>
            <Button
              cssClass={style.button}
              onClick={() => {
                addAlert({
                  text: "Error with the direction adjustment",
                  timeout: 3,
                  status: "error",
                });
              }}
            >
              Left to Right
            </Button>
          </div>
          <div className={style.accessibility}>
            <div className={style.title}>Accessibility</div>
            <Button
              cssClass={[`${style.button}`, ` ${style.active}`].join("")}
              onClick={() => {
                addAlert({
                  text: "Error with the increasing text size",
                  timeout: 3,
                  status: "error",
                });
              }}
            >
              A+
            </Button>
            <Button
              cssClass={style.button}
              onClick={() => {
                addAlert({
                  text: "Error with the increasing text size",
                  timeout: 3,
                  status: "error",
                });
              }}
            >
              A-
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

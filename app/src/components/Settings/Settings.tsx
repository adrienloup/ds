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

  const { dataSettings, setDataSettings } =
    useContext<SettingsType>(SettingsContext);
  const [mode, setMode] = useState(dataSettings.mode);
  const asideRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const { addAlert } = useAlert();

  const handleMode = (mode: string) => {
    setDataSettings({ ...dataSettings, mode });
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
  });

  useEffect(() => onResize());

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
                mode === "light" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleMode("light")}
            >
              <Icon name="light_mode" />
              Light
            </Button>
            <Button
              cssClass={[
                `${style.button}`,
                mode === "dark" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleMode("dark")}
            >
              <Icon name="mode_night" />
              Dark
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
              <Icon cssClass={style.icon} name="format_textdirection_l_to_r" />
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
              <Icon cssClass={style.icon} name="format_textdirection_r_to_l" />
              Left to Right
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

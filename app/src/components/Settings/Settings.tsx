import { useEffect, useRef } from "react";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Settings.module.scss";

export const Settings = () => {
  // console.log("Settings");
  const asideRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const { settings, setSettings } = useSettings();
  const { addAlert } = useAlert();

  const handleModeChange = (mode: string) => {
    setSettings({ ...settings, mode });
  };

  const handleOpenChange = () => {
    setSettings({ ...settings, open: false });
  };

  useEffect(() => {
    const handleResize = () => {
      if (!asideRef.current || !innerRef.current) return;

      const height = innerRef.current.clientHeight;

      asideRef.current.style.height = height + "px";
      asideRef.current.style.top = `-${settings.open ? height : height / 2}px`;

      document.getElementById("_ds_y0y09_10")!.style.paddingTop = `${
        settings.open ? height : 0
      }px`;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [settings]);

  return (
    <aside
      role="complementary"
      ref={asideRef}
      className={[style.settings, settings.open ? ` ${style.open}` : ""].join(
        ""
      )}
    >
      <div ref={innerRef} className={style.inner}>
        <Button
          cssClass={[style.button, ` ${style.close}`].join("")}
          onClick={() => handleOpenChange()}
        >
          <Icon name="close" />
        </Button>
        <div className={style.content}>
          <div className={style.mode}>
            <div className={style.title}>Mode</div>
            <Button
              cssClass={[
                `${style.button}`,
                settings.mode === "light" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleModeChange("light")}
            >
              <Icon name="light_mode" />
              Light
            </Button>
            <Button
              cssClass={[
                `${style.button}`,
                settings.mode === "dark" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleModeChange("dark")}
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
                  text: "Error with the direction adjustment right to left",
                  timeout: 2,
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
                  text: "Error with the direction adjustment left to right",
                  timeout: 2,
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

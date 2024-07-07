import { useEffect, useRef, useState } from "react";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import { ModeType } from "../../models/Mode";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Settings.module.scss";

export const Settings = () => {
  // console.log("Settings");
  const asideRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState(16);
  const { settings, setSettings } = useSettings();
  const { addAlert } = useAlert();

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
    console.log(fontSize);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
    console.log(fontSize);
  };

  const handleModeChange = (mode: ModeType) => {
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
          <div className={style.column}>
            <div className={style.mode}>
              <div className={style.title}>Mode</div>
              <Button
                cssClass={[
                  `${style.button}`,
                  settings.mode === "light" ? ` ${style.active}` : "",
                ].join("")}
                onClick={() => handleModeChange("light")}
              >
                <Icon name="light_mode" cssClass={style.icon} />
                Light
              </Button>
              <Button
                cssClass={[
                  `${style.button}`,
                  settings.mode === "system" ? ` ${style.active}` : "",
                ].join("")}
                onClick={() => handleModeChange("system")}
              >
                <Icon name="contrast" cssClass={style.icon} />
                System
              </Button>
              <Button
                cssClass={[
                  `${style.button}`,
                  settings.mode === "dark" ? ` ${style.active}` : "",
                ].join("")}
                onClick={() => handleModeChange("dark")}
              >
                <Icon name="dark_mode" cssClass={style.icon} />
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
                <Icon
                  cssClass={style.icon}
                  name="format_textdirection_l_to_r"
                />
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
                <Icon
                  cssClass={style.icon}
                  name="format_textdirection_r_to_l"
                />
                Left to Right
              </Button>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.accessibility}>
              <div className={style.title}>Accessibility</div>
              <Button
                cssClass={[`${style.button}`, ` ${style.active}`].join("")}
                onClick={increaseFontSize}
              >
                A
              </Button>
              <Button cssClass={style.button} onClick={decreaseFontSize}>
                A
              </Button>
            </div>
            <div className={style.color}>
              <div className={style.title}>Color</div>
              <Button
                cssClass={style.button}
                onClick={() => {
                  addAlert({
                    text: "Error with the color editing",
                    timeout: 2,
                    status: "error",
                  });
                }}
              >
                Edit documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import { useFontSize, useFontSizeDispatch } from "../../hooks/useFontSize";
import { ModeType } from "../../models/Mode";
import { Color } from "../Color/Color";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import style from "./Settings.module.scss";

export const Settings = () => {
  // console.log("Settings");
  const asideRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [colorModal, setColorModal] = useState(false);
  const [fontSizeAlert, setFonSizeAlert] = useState(false);
  const { settings, setSettings } = useSettings();
  const { addAlert } = useAlert();
  const { decreaseFontSize, increaseFontSize } = useFontSizeDispatch();
  const { fontSize } = useFontSize();

  const handleModeChange = (mode: ModeType) => {
    setSettings({ ...settings, mode });
    addAlert({
      text: mode === "system" ? "browser mode" : `${mode} mode`,
      timeout: 1,
      status: "success",
    });
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

  useEffect(() => {
    if (!fontSizeAlert) return;
    addAlert({
      text: `${fontSize} pixels`,
      timeout: 1,
      status: "success",
    });
    setFonSizeAlert(false);
  }, [fontSizeAlert]);

  return (
    <aside
      role="complementary"
      ref={asideRef}
      className={[style.settings, settings.open ? ` ${style.open}` : ""].join(
        ""
      )}
    >
      <div ref={innerRef} data-cy="settings" className={style.inner}>
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
                data-cy="settings-light-mode"
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
                data-cy="settings-system-mode"
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
                data-cy="settings-dark-mode"
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
                cssClass={style.button}
                onClick={() => {
                  addAlert({
                    text: "Error with the direction adjustment",
                    timeout: 1,
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
                    text: "Error with the direction adjustment",
                    timeout: 1,
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
                cssClass={[
                  style.button,
                  fontSize === 16 ? ` ${style.active}` : "",
                ].join("")}
                onClick={() => (decreaseFontSize(), setFonSizeAlert(true))}
                ariaLabel="Decrease text size"
              >
                <Icon cssClass={style.icon} name="remove_circle" /> A
              </Button>
              <Button
                cssClass={[
                  style.button,
                  fontSize === 20 ? ` ${style.active}` : "",
                ].join("")}
                onClick={() => (increaseFontSize(), setFonSizeAlert(true))}
                ariaLabel="Increase text size"
              >
                <Icon cssClass={style.icon} name="add_circle" /> A
              </Button>
            </div>
            <div className={style.color}>
              <div className={style.title}>Color</div>
              <Button
                cssClass={style.button}
                onClick={() => setColorModal(!colorModal)}
              >
                <Icon cssClass={style.icon} name="format_paint" />
                Edit documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
      {colorModal &&
        createPortal(
          <Modal
            head={<h3>Edit</h3>}
            body={<Color />}
            open={colorModal}
            onClick={() => setColorModal(false)}
          />,
          document.body
        )}
    </aside>
  );
};

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import { useFontSize, useFontSizeDispatch } from "../../hooks/useFontSize";
import { ModeType } from "../../models/Mode";
import { LangType } from "../../models/Lang";
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

  const handleOpenChange = () => {
    setSettings({ ...settings, open: false });
  };

  const handleModeChange = (mode: ModeType) => {
    setSettings({ ...settings, mode });
    addAlert({
      text: `${mode}`,
      timeout: 2,
      status: "success",
    });
  };

  const handleLangChange = (lang: LangType) => {
    setSettings({ ...settings, lang });
    addAlert({
      text: lang === "en" ? "English" : "Français",
      timeout: 2,
      status: "success",
    });
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
      timeout: 2,
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
                    text: "Error with the direction adjustment",
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
            <div className={style.row}>
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
              <div className={style.lang}>
                <div className={style.title}>Language</div>
                <Button
                  data-cy="settings-en-lang"
                  cssClass={[
                    `${style.button}`,
                    settings.lang === "en" ? ` ${style.active}` : "",
                  ].join("")}
                  onClick={() => handleLangChange("en")}
                >
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 800 800"
                  >
                    <circle
                      id="Oval"
                      fill="#FFFFFF"
                      cx="400"
                      cy="400"
                      r="400"
                    ></circle>
                    <path
                      d="M82.6875,156.471875 C51.2671875,197.351562 27.575,244.46875 13.7796875,295.654688 L221.870312,295.654688 L82.6875,156.471875 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M786.220312,295.654687 C772.425,244.470312 748.73125,197.353125 717.3125,156.473437 L578.132812,295.654687 L786.220312,295.654687 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M13.7796875,504.35 C27.5765625,555.534375 51.26875,602.651562 82.6875,643.529687 L221.865625,504.35 L13.7796875,504.35 L13.7796875,504.35 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M643.528125,82.6890625 C602.648438,51.26875 555.532812,27.5765625 504.346875,13.7796875 L504.346875,221.86875 L643.528125,82.6890625 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M156.471875,717.310938 C197.351562,748.73125 244.46875,772.423437 295.653125,786.220312 L295.653125,578.132812 L156.471875,717.310938 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M295.651563,13.7796875 C244.467187,27.5765625 197.35,51.26875 156.471875,82.6875 L295.651563,221.867188 L295.651563,13.7796875 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M504.348438,786.220312 C555.532812,772.423437 602.65,748.73125 643.528125,717.3125 L504.348438,578.132812 L504.348438,786.220312 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M578.132812,504.35 L717.3125,643.53125 C748.73125,602.653125 772.425,555.534375 786.220312,504.35 L578.132812,504.35 Z"
                      fill="#0052B4"
                    ></path>
                    <path
                      d="M796.614063,347.826563 L452.176563,347.826563 L452.175,347.826563 L452.175,3.3859375 C435.095313,1.1625 417.682813,0 400,0 C382.314063,0 364.904687,1.1625 347.826563,3.3859375 L347.826563,347.823438 L347.826563,347.825 L3.3859375,347.825 C1.1625,364.904687 0,382.317187 0,400 C0,417.685938 1.1625,435.095313 3.3859375,452.173438 L347.823438,452.173438 L347.825,452.173438 L347.825,796.614063 C364.904687,798.8375 382.314063,800 400,800 C417.682813,800 435.095313,798.839062 452.173438,796.614063 L452.173438,452.176563 L452.173438,452.175 L796.614063,452.175 C798.8375,435.095313 800,417.685938 800,400 C800,382.317187 798.8375,364.904687 796.614063,347.826563 Z"
                      fill="#D80027"
                    ></path>
                    <path
                      d="M504.348438,504.348437 L504.348438,504.348437 L682.842188,682.84375 C691.051563,674.6375 698.882813,666.057812 706.354688,657.164062 L553.539062,504.348437 L504.348438,504.348437 L504.348438,504.348437 Z"
                      fill="#D80027"
                    ></path>
                    <path
                      d="M295.651563,504.35 L295.648438,504.35 L117.15625,682.842187 C125.3625,691.051563 133.942187,698.882812 142.835938,706.354687 L295.651563,553.535938 L295.651563,504.35 Z"
                      fill="#D80027"
                    ></path>
                    <path
                      d="M295.651563,295.654688 L295.651563,295.651562 L117.157812,117.15625 C108.948437,125.3625 101.117187,133.942187 93.6453125,142.835938 L246.4625,295.654688 L295.651563,295.654688 L295.651563,295.654688 Z"
                      fill="#D80027"
                    ></path>
                    <path
                      d="M504.348437,295.654688 L504.348437,295.654688 L682.84375,117.157812 C674.6375,108.948437 666.057812,101.117187 657.164062,93.646875 L504.348437,246.464062 L504.348437,295.654688 L504.348437,295.654688 Z"
                      fill="#D80027"
                    ></path>
                  </svg>{" "}
                  EN
                </Button>
                <Button
                  data-cy="settings-en-lang"
                  cssClass={[
                    `${style.button}`,
                    settings.lang === "fr" ? ` ${style.active}` : "",
                  ].join("")}
                  onClick={() => handleLangChange("fr")}
                >
                  <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 800 800"
                  >
                    <circle
                      id="Oval"
                      fill="#FFFFFF"
                      cx="400"
                      cy="400"
                      r="400"
                    ></circle>
                    <path
                      d="M800,400 C800,228.014063 691.45,81.396875 539.129688,24.8796875 L539.129688,775.121875 C691.45,718.603125 800,571.985938 800,400 Z"
                      fill="#D80027"
                    ></path>
                    <path
                      d="M0,400 C0,571.985938 108.551563,718.603125 260.870313,775.120313 L260.870313,24.8796875 C108.551563,81.396875 0,228.014063 0,400 Z"
                      fill="#0052B4"
                    ></path>
                  </svg>{" "}
                  FR
                </Button>
              </div>
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

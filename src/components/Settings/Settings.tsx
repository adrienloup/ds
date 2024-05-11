import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../contexts/DataContext";
import { DataType } from "../../models/Data";
import { useAlert } from "../../hooks/useAlert";
import { ButtonComponent } from "../Button/Button";
import { IconComponent } from "../Icon/Icon";
import style from "./Settings.module.scss";

type SettingsProps = {
  open: boolean;
  onClick: () => void;
};

export const SettingsComponent = ({
  open = false,
  onClick = () => {},
}: SettingsProps) => {
  const { addAlert } = useAlert();
  const { data, setData } = useContext<DataType>(DataContext);
  const [mode, setMode] = useState<string>(data.settings.mode);
  const asideRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMode = (mode: string) => {
    data.settings.mode = mode;
    setData({ ...data });
    setMode(mode);
  };

  const onResize = () => {
    if (!asideRef.current || !innerRef.current) return;

    const innerHeight = innerRef.current.offsetHeight;

    asideRef.current.style.height = innerHeight + "px";
    asideRef.current.style.top = `${!open ? -(innerHeight / 2) : 0}px`;

    document.getElementById("_ds_y0y09_10")!.style.paddingTop =
      `${open ? innerHeight : 0}px`; // Root
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  useEffect(() => onResize());

  return (
    <aside role="complementary" ref={asideRef} className={style.settings}>
      <div ref={innerRef} className={style.inner}>
        <ButtonComponent cssClass={style.close} onClick={onClick}>
          <IconComponent name="close" />
        </ButtonComponent>
        <div className={style.content}>
          <div className={style.mode}>
            <div className={style.title}>Mode</div>
            <ButtonComponent
              cssClass={[
                `${style.button}`,
                mode === "dark" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleMode("dark")}
            >
              Dark
            </ButtonComponent>
            <ButtonComponent
              cssClass={[
                `${style.button}`,
                mode === "light" ? ` ${style.active}` : "",
              ].join("")}
              onClick={() => handleMode("light")}
            >
              Light
            </ButtonComponent>
          </div>
          <div className={style.direction}>
            <div className={style.title}>Direction</div>
            <ButtonComponent
              cssClass={[`${style.button}`, ` ${style.active}`].join("")}
              onClick={() => {
                addAlert({
                  status: "error",
                  text: "There is an error with the direction adjustment",
                  timeout: 3,
                });
              }}
            >
              Left
            </ButtonComponent>
            <ButtonComponent
              cssClass={style.button}
              onClick={() => {
                addAlert({
                  status: "error",
                  text: "There is an error with the direction adjustment",
                  timeout: 3,
                });
              }}
            >
              Right
            </ButtonComponent>
          </div>
          <div className={style.theme}>
            <div className={style.title}>Theme</div>
            <ButtonComponent
              cssClass={style.button}
              onClick={() => {
                addAlert({
                  status: "error",
                  text: "There is an error with the theme adjustment",
                  timeout: 3,
                });
              }}
            >
              Edit color
            </ButtonComponent>
          </div>
        </div>
      </div>
    </aside>
  );
};

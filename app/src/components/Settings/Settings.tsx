import { useEffect, useState, useRef } from "react";
// import { DataContext } from "../../contexts/DataContext";
// import { DataType } from "../../models/Data";
import { useData } from "../../hooks/useData";
// import { useAlert } from "../../hooks/useAlert";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import style from "./Settings.module.scss";

interface SettingsProps {
  open: boolean;
  onClick: () => void;
}

export const Settings = ({ open, onClick }: SettingsProps) => {
  console.log("Settings");
  // const { addAlert } = useAlert();
  // const { data, setData } = useContext<DataType>(DataContext);
  const { data, setData } = useData();
  const [mode, setMode] = useState(data.settings.mode);
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
    asideRef.current.style.top = `${
      open ? -innerHeight : -(innerHeight / 2)
    }px`;

    document.getElementById("_ds_y0y09_10")!.style.paddingTop = `${
      open ? innerHeight : 0
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
              // onClick={() => {
              //   addAlert({
              //     text: "There is an error with the direction adjustment",
              //     timeout: 2,
              //     status: "error",
              //   });
              // }}
            >
              Right to Left
            </Button>
            <Button
              cssClass={style.button}
              // onClick={() => {
              //   addAlert({
              //     text: "There is an error with the direction adjustment",
              //     timeout: 2,
              //     status: "error",
              //   });
              // }}
            >
              Left to Right
            </Button>
          </div>
          <div className={style.accessibility}>
            <div className={style.title}>Accessibility</div>
            <Button
              cssClass={[`${style.button}`, ` ${style.active}`].join("")}
              // onClick={() => {
              //   addAlert({
              //     text: "There is an error with the increasing text size",
              //     timeout: 2,
              //     status: "error",
              //   });
              // }}
            >
              A+
            </Button>
            <Button
              cssClass={style.button}
              // onClick={() => {
              //   addAlert({
              //     text: "There is an error with the increasing text size",
              //     timeout: 2,
              //     status: "error",
              //   });
              // }}
            >
              A-
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

import { ColorType } from "../../models/Color";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import style from "./Color.module.scss";

const colors: ColorType[] = ["yellow", "purple", "magenta", "cyan"];

export const Color = () => {
  const { settings, setSettings } = useSettings();
  const { addAlert } = useAlert();

  const handleColorChange = (color: ColorType) => {
    setSettings({ ...settings, color: `${color}` });
    addAlert({
      text: `${color} color`,
      timeout: 1,
      status: "success",
    });
  };

  return (
    <div className={style.color}>
      <p className={style.text}>
        Change the Primary color of the documentation
      </p>
      <div className={style.list}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={[
              style.item,
              ` ${style[color]}`,
              settings.color === color ? ` ${style.active}` : "",
            ].join("")}
            onClick={() => handleColorChange(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

import { ColorType } from "../../models/Color";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import style from "./ColorSwitcher.module.scss";

const colors: ColorType[] = ["yellow", "purple", "magenta", "cyan"];

export const ColorSwitcher = () => {
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
    <div className={style.colorswitcher}>
      <p>Change the Primary color of the documentation</p>
      <div className={style.list}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={style[color]}
            onClick={() => handleColorChange(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

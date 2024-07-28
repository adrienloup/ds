import { ColorType } from "../../models/Color";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import { Icon } from "../Icon/Icon";
import style from "./Color.module.scss";

const colors: ColorType[] = ["yellow", "purple", "magenta", "cyan"];

export const Color = () => {
  console.log("Color");

  const { settings, setSettings } = useSettings();
  const { addAlert } = useAlert();

  const handleColorChange = (color: ColorType) => {
    setSettings({ ...settings, color: `${color}` });
    addAlert({
      text: `${color}`,
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
          <button
            key={index}
            className={[
              style.item,
              ` ${style[color]}`,
              settings.color === color ? ` ${style.active}` : "",
            ].join("")}
            onClick={() => handleColorChange(color)}
          >
            <span className={style.label}>{color}</span>
            {settings.color === color ? (
              <Icon name="verified" cssClass={style.icon} />
            ) : (
              ""
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

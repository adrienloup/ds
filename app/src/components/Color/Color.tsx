import { ColorType } from "../../models/Color";
import { useSettings } from "../../hooks/useSettings";
import { useAlert } from "../../hooks/useAlert";
import { Icon } from "../Icon/Icon";
import styles from "./Color.module.scss";

const colors: ColorType[] = ["yellow", "purple", "magenta", "cyan"];

export const Color = () => {
  // console.log("Color");
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
    <div className={styles.color}>
      <p className={styles.text}>
        Change the Primary color of the documentation
      </p>
      <div className={styles.list}>
        {colors.map((color, index) => (
          <button
            key={index}
            className={[
              styles.item,
              ` ${styles[color]}`,
              settings.color === color ? ` ${styles.active}` : "",
            ].join("")}
            onClick={() => handleColorChange(color)}
          >
            <span className={styles.label}>{color}</span>
            {settings.color === color ? (
              <Icon name="verified" cssClass={styles.icon} />
            ) : (
              ""
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

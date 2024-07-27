import { Icon } from "../Icon/Icon";
import style from "./Separator.module.scss";

export const Separator = ({ name }: { name: string }) => {
  return (
    <div className={style.separator}>
      <Icon name={name} cssClass={style.icon} />
    </div>
  );
};

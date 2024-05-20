import { Link } from "react-router-dom";
import { PageType } from "../../models/Page";
import style from "./PageList.module.scss";

export const Page = ({ name, path }: PageType) => {
  return (
    <div className={style.page}>
      {path ? <Link to={path}>{name}</Link> : name}
    </div>
  );
};

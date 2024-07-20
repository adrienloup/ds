import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import style from "./Logo.module.scss";

export const Logo = () => {
  // console.log("Logo");

  return (
    <Link className={style.logo} to={"/ds/"}>
      DS<span>v{version}</span>
    </Link>
  );
};

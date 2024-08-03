import { Link } from "react-router-dom";
import { version } from "../../../package.json";
import styles from "./Logo.module.scss";

export const Logo = () => {
  // console.log("Logo");
  return (
    <Link className={styles.logo} data-cy="logo" to={"/ds/"}>
      DS<span>v{version}</span>
    </Link>
  );
};

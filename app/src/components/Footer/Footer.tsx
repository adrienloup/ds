import { useTranslation } from "react-i18next";
import { ScrollTo } from "../ScrollTo/ScrollTo";
import styles from "./Footer.module.scss";

export const Footer = () => {
  // console.log("Footer");
  const { t } = useTranslation();

  return (
    <footer role="contentinfo" data-cy="footer" className={styles.footer}>
      <div className={styles.inner}>
        <ScrollTo top={0} text="Top of page" position="top-start" />
        <span className={styles.text}>{t("component.footer")}</span>
      </div>
    </footer>
  );
};

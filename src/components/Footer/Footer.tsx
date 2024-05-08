import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer role="contentinfo" className={style.footer}>
      <div className={style.inner}>
        Atomic Design <span>way</span>
      </div>
    </footer>
  );
};

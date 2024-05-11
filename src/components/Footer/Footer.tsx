import style from "./Footer.module.scss";

export const FooterComponent = () => {
  return (
    <footer role="contentinfo" className={style.footer}>
      <div className={style.inner}>
        Atomic Design <span>logic</span>
      </div>
    </footer>
  );
};

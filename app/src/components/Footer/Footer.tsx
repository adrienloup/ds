import style from "./Footer.module.scss";

export const Footer = () => {
  console.log("Footer");

  return (
    <footer role="contentinfo" className={style.footer}>
      <div className={style.inner}>Atomic Design</div>
    </footer>
  );
};

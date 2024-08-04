import { useCallback, useEffect, useState } from "react";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({ cssClass }: { cssClass?: string }) => {
  // console.log("ProgressBar");
  const [windowH, setWindowH] = useState(0);
  const [bodyH, setBodyH] = useState(0);
  const [bannerW, setBannerW] = useState(0);
  const [progressbarW, setProgressbarW] = useState(0);
  const [valuenow, setValuenow] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    setProgressbarW((scrollTop / (bodyH - windowH)) * bannerW);
    setValuenow(parseFloat(((progressbarW * 100) / bannerW).toFixed()));
  }, [windowH, bodyH, bannerW]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowH(window.innerHeight);
      setBodyH(document.body.offsetHeight);
      setBannerW(document.querySelector("[role='banner']")!.clientWidth);
      handleScroll();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div
      className={[styles.progressbar, cssClass ? ` ${cssClass}` : ""].join("")}
      style={{ width: `${progressbarW.toFixed()}px` }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valuenow}
    ></div>
  );
};

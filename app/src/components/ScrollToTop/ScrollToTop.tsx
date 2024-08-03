import { useEffect } from "react";

export const ScrollToTop = () => {
  // console.log("ScrollToTop");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

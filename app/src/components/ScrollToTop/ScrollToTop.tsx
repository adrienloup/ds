import { memo, useEffect } from "react";

export const ScrollToTop = memo(() => {
  console.log("ScrollToTop");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
});

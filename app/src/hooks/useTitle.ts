import { useEffect } from "react";
import { version } from "./../../package.json";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | DS Library v${version}`;
  }, [title]);
};

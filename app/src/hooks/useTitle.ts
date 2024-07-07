import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - DS Library`;
  }, [title]);
};

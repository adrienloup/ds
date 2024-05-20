import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    return () => {
      document.title = "Design System";
    };
  });

  useEffect(() => {
    document.title = title;
  }, [title]);
};

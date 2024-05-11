import { useEffect } from "react";

type TileProps = {
  title: string;
};

export const TitleComponent = ({ title = "My Page Title" }: TileProps) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return null;
};

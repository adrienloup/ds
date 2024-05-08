import { useEffect } from "react";

type TileProps = {
  title: string;
};

export const Title = ({ title = "My Page Title" }: TileProps) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return null;
};

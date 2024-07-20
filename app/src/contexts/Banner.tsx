import { createContext, useState } from "react";
import { SlotType } from "../models/Slot";
import { StatusType } from "../models/Status";

const initialValue = [
  {
    id: "0",
    text: "The website is under construction, come back later :)",
    status: "warning" as StatusType,
  },
  {
    id: "1",
    text: "If you need an answer to a problem you have encountered, please open an issue on <a href=‘https://github.com/adrienloup/ds' target='_blank' rel='noopener'>GitHub</a>",
    status: "info" as StatusType,
  },
];

export const BannerContext = createContext<
  { id: string; text: string; status: StatusType }[]
>([]);

export const BannerDispatchContext = createContext<(id: string) => void>(
  (id: string) => id
);

export const BannerProvider = ({ children }: SlotType) => {
  const [banners, setBanners] = useState(initialValue);

  const removeBanner = (id: string) => {
    setBanners((prev) => prev.filter((banner) => banner.id !== id));
  };

  return (
    <BannerContext.Provider value={banners}>
      <BannerDispatchContext.Provider value={removeBanner}>
        {children}
      </BannerDispatchContext.Provider>
    </BannerContext.Provider>
  );
};

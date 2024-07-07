import { createContext, useState } from "react";
import { SlotType } from "../models/Slot";
import { StatusType } from "../models/Status";

const initialValue = [
  {
    id: 0,
    text: "The website is under construction, we apologize for the inconvenience caused :)",
    status: "warning" as StatusType,
  },
  {
    id: 1,
    text: "If something is broken or if you need a reply to a problem you've encountered, please open an issue on GitHub",
    status: "info" as StatusType,
  },
];

export const BannerContext = createContext<
  { id: number; text: string; status: StatusType }[]
>([]);

export const BannerDispatchContext = createContext<(id: number) => void>(
  (id: number) => id
);

export const BannerProvider = ({ children }: SlotType) => {
  const [banners, setBanners] = useState(initialValue);

  const removeBanner = (id: number) => {
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

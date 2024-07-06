import { useBanner } from "../../hooks/useBanner";
import { Banner } from "../Banner/Banner";

export const Banners = () => {
  // console.log("Banners");
  const banners = useBanner();

  return (
    <>
      {banners &&
        banners.map((banner) => (
          <Banner
            key={banner.id}
            id={banner.id}
            status={banner.status}
            text={banner.text}
          />
        ))}
    </>
  );
};

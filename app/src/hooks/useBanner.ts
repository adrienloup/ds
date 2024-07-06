import { useContext } from "react";
import { BannerContext, BannerDispatchContext } from "../contexts/Banner";

export function useBanner() {
  return useContext(BannerContext);
}

export function useBannerDispatch() {
  return useContext(BannerDispatchContext);
}

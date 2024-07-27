import { StatusType } from "./Status";

export type BannerType = {
  id: string;
  text: string;
  status?: StatusType;
};

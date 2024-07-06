import { StatusType } from "./Status";

export type AlertType = {
  text: string;
  id?: string;
  title?: string;
  status?: StatusType;
  cssClass?: string;
  timeout?: number;
  button?: boolean;
  handleRemove?: () => void;
};

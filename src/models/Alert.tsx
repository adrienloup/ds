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

export type AlertContextType = {
  alerts: AlertType[];
  addAlert: (alert: AlertType) => string;
  removeAlert: (id: string) => void;
};

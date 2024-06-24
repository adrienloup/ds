export type AlertType = {
  text: string;
  id?: string;
  title?: string;
  status?: "info" | "success" | "warning" | "error";
  cssClass?: string;
  timeout?: number;
  button?: boolean;
  handleRemove?: () => void;
};

export type AlertsType = {
  alerts: AlertType[];
  addAlert: (alert: AlertType) => string;
  removeAlert: (id: string) => void;
};

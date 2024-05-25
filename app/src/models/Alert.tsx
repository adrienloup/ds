export interface AlertType {
  text: string;
  id?: string;
  title?: string;
  status?: "info" | "success" | "warning" | "error";
  cssClass?: string;
  timeout?: number;
  button?: boolean;
  handleRemove?: () => void;
}

export interface AlertsType {
  alerts: AlertType[];
  addAlert: (alert: AlertType) => string;
  removeAlert: (id: string) => void;
}

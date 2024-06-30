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

import { StatusType } from "../models/Status";

export const setStatusIcon = (status: StatusType) => {
  switch (status) {
    case "info":
      return "info";
    case "error":
      return "error";
    case "warning":
      return "warning";
    case "success":
      return "check_circle";
    default:
      return "info";
  }
};

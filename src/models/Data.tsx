import { NotificationType } from "./Notification";
import { UserType } from "./User";

export type DataType = {
  data: {
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      nav: string;
      theme: string;
    };
    user: UserType | null;
  };
  setData: (data: {
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      nav: string;
      theme: string;
    };
    user: UserType | null;
  }) => void;
};

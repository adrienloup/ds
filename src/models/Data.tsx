import { NotificationType } from "./Notification";
import { UserType } from "./User";

export type DataType = {
  data: {
    category: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      theme: string;
    };
    user: UserType | null;
  };
  setData: (data: {
    category: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      theme: string;
    };
    user: UserType | null;
  }) => void;
};

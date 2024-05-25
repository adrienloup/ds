import { NotificationType } from "./Notification";
import { UserType } from "./User";

export interface DataType {
  data: {
    category: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      open: boolean;
    };
    user: UserType | null;
  };
  setData: (data: {
    category: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
      open: boolean;
    };
    user: UserType | null;
  }) => void;
}

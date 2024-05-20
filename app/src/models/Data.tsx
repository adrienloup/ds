import { NotificationType } from "./Notification";
import { UserType } from "./User";

export interface DataType {
  data: {
    typology: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
    };
    user: UserType | null;
  };
  setData: (data: {
    typology: string;
    notifications: NotificationType[];
    settings: {
      dir: string;
      mode: string;
    };
    user: UserType | null;
  }) => void;
}

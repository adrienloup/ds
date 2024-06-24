export type NotificationsType = {
  dataNotifications: NotificationType[];
  setDataNotifications: (dataNotifications: NotificationType[]) => void;
};
export type NotificationType = {
  id: number;
  title: string;
};

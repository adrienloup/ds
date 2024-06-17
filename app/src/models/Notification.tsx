export interface NotificationsType {
  dataNotifications: NotificationType[];
  setDataNotification: (dataNotifications: NotificationType[]) => void;
}
export interface NotificationType {
  id: number;
  title: string;
}

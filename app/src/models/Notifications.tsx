export interface NotificationsType {
  dataNotifications: NotificationType[];
  setDataNotifications: (dataNotifications: NotificationType[]) => void;
}
export interface NotificationType {
  id: number;
  title: string;
}

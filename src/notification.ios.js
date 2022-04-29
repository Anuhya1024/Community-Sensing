import PushNotificationIOS from '@react-native-community/push-notification-ios';

const getCorrectDate = () => {
  const date = new Date();
  date.setDate(date.getDate());
  date.setHours(12);
  date.setMinutes(36);
  return date;
};

const showNotification = (title, message) => {
  PushNotificationIOS.addNotificationRequest({
    id: new Date().toString(),
    repeats: true,
    repeatsComponent: {
      hour: true,
      minute: true,
    },
  });
};

const handleScheduleNotification = (title, message) => {
  const date = new Date();
  date.setSeconds(date.getSeconds + 5);
  PushNotificationIOS.scheduleLocalNotificationSchedule({
    alertTitle: title,
    alertBody: message,
    fireDate: date.toISOString(),
  });
};

export {showNotification, handleScheduleNotification};

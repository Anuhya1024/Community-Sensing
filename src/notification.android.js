import {PushNotification} from 'react-native-push-notification';

const showNotification = (title, message) => {
  PushNotification.localNotification({
    title: title,
    message: message,
  });
};

const handleScheduleNotification = (title, message) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

export {showNotification, handleScheduleNotification};

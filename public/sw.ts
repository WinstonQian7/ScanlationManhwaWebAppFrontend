function receivePushNotification(e: Event) {
  
}

function openPushNotification(e: Event) {

}

self.addEventListener('', receivePushNotification);
self.addEventListener('notificationclick', openPushNotification);

interface NotificationEvent {
	action: string;
	notification: Notification;
}
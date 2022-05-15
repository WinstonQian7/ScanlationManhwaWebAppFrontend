import { useEffect, useState } from 'react';

const pushServerSecretKey = '#INSERT_KEY'; // Should be in .env file 

export function sendNotification() {
  const title = 'Subscribed series has been posted!';
  const options = {};

  navigator.serviceWorker.ready.then(function showNotification(serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}

export function usePushNotification() {
  const [userConsent, setUserConsent] = useState<NotificationPermission>();
  const [userSubscription, setUserSubscription] = useState<PushSubscription | null>();
  const [pushServerSubscriptionId, setPushServerSubscriptionId] = useState<string>();

  useEffect(function installServiceWorker() {
    if ("service worker" in navigator.serviceWorker && "PushManager" in window) {
      navigator.serviceWorker.register("./sw.ts");
      const getExistingSubscription = async () => {
        const isInstalled = await navigator.serviceWorker.ready;
        const existingSubscription = await isInstalled.pushManager.getSubscription();
        setUserSubscription(existingSubscription);
      };
      getExistingSubscription();
    }
  }, []);

  const onClickAskUserPermission = (e: React.MouseEvent) => {
    const checkUserPermission = async () => {
      const userPermission = await Notification.requestPermission();
      if (userPermission !== 'granted') {
        // do something 
        setUserConsent(userPermission);
      }
    };
    checkUserPermission();
  }

  const onClickSubscribeToPushNotification = (e: React.MouseEvent) => {
    const createNotificationSubscription = async () => {
      const serviceWorker = await navigator.serviceWorker.ready;
      const subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: pushServerSecretKey,
      });
      setUserSubscription(subscription);
    }
    createNotificationSubscription().catch( /* do error handling */);
  };

  const onClickSendSubscriptionToPushServer = () => {
    // axios post call with subscription id to push server 
  };

  const onClickSendNotification = async () => {
    // axios get call with subscription id
  };

  return [onClickAskUserPermission,
    onClickSubscribeToPushNotification,
    onClickSendNotification,
    onClickSendNotification]

}
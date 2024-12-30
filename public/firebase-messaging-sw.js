/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyALXG1N4KPCkbPJoiX1TeyCMMpb2d1jnr0",
  authDomain: "wasilni-768ec.firebaseapp.com",
  projectId: "wasilni-768ec",
  storageBucket: "wasilni-768ec.appspot.com",
  messagingSenderId: "633097750359",
  appId: "1:633097750359:web:9622c821b787ee5a7ce012",
  measurementId: "G-H7SMDF1H3T",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

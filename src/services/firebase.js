import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDgiZn-YePA-ts8WL363oUTY8g5cSpagsA',
  authDomain: 'chatty-bd691.firebaseapp.com',
  databaseURL: 'https://chatty-bd691.firebaseio.com',
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();



import { initializeApp, getApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCSK0q-HApwReFS_QVvMn91AjUUbm85wYs",
    authDomain: "air-quality-monitoring-ac4a6.firebaseapp.com",
    databaseURL: "https://air-quality-monitoring-ac4a6-default-rtdb.firebaseio.com",
    projectId: "air-quality-monitoring-ac4a6",
    storageBucket: "air-quality-monitoring-ac4a6.appspot.com",
    messagingSenderId: "31467452725",
    appId: "1:31467452725:web:ce6be29eb7e94af4dff47c"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const authUser = getAuth();

export { auth ,app, authUser};
export default db;
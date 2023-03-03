import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS_LFoQ7SxiEzpjb5BeRPlcxp9yiJFmv4",
  authDomain: "chatgpt-f704d.firebaseapp.com",
  projectId: "chatgpt-f704d",
  storageBucket: "chatgpt-f704d.appspot.com",
  messagingSenderId: "581615886012",
  appId: "1:581615886012:web:645f2d934161e188793ab9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

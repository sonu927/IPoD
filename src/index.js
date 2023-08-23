import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "ipod-633f2",
  storageBucket: "ipod-633f2.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
//console.log("Storage:", storage);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

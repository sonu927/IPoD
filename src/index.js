import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiCkyMi9_bF5uRtyOyWAthSvuGmI7efNI",
  authDomain: "ipod-633f2.firebaseapp.com",
  projectId: "ipod-633f2",
  storageBucket: "ipod-633f2.appspot.com",
  messagingSenderId: "131228718824",
  appId: "1:131228718824:web:6e3733c3d11513e1eadb5d",
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

import { createRoot } from "react-dom/client";
import { App } from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7lcJEmKtYuyD8WBDNkh066_rybwYy26I",
  authDomain: "movie-trivia-363ba.firebaseapp.com",
  projectId: "movie-trivia-363ba",
  storageBucket: "movie-trivia-363ba.appspot.com",
  messagingSenderId: "215372310117",
  appId: "1:215372310117:web:fd78ede1cb7e43f79cc88c",
  measurementId: "G-5ZGSB6BL56",
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(<App />);

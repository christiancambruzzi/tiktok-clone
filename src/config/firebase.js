import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDt20ob3ocN7jpRe0HfbeQ8hcb_jLcM2y4",
  authDomain: "tiktokdev-734c6.firebaseapp.com",
  projectId: "tiktokdev-734c6",
  storageBucket: "tiktokdev-734c6.appspot.com",
  messagingSenderId: "698296282636",
  appId: "1:698296282636:web:1927dccb3e8263a3f08829",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

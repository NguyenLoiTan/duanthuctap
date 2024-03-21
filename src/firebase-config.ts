
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCUTRd8aEs2rw7C-hd_zP_WRMFlKjmC9gE",
  authDomain: "testthuctap-d830b.firebaseapp.com",
  databaseURL: "https://testthuctap-d830b-default-rtdb.firebaseio.com",
  projectId: "testthuctap-d830b",
  storageBucket: "testthuctap-d830b.appspot.com",
  messagingSenderId: "680887242078",
  appId: "1:680887242078:web:bc9dfd68bb76e6258753cf",
  measurementId: "G-9KN1F2L840"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
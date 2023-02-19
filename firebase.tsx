import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCJ-QOIvj93MW7WjSExwLFb-5SPy_YwKU",
  authDomain: "hale-mate.firebaseapp.com",
  projectId: "hale-mate",
  storageBucket: "hale-mate.appspot.com",
  messagingSenderId: "500410987422",
  appId: "1:500410987422:web:ca1bf461869ede84355c8f",
  measurementId: "G-6YRBGSS4NY"
};
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
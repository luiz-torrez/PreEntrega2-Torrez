import { initializeApp } from "firebase/app";
import {  getFirestore,} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWsRC1yuoj1IRX3Mf9UN-MrmvTRZykfJk",
  authDomain: "m-movil.firebaseapp.com",
  projectId: "m-movil",
  storageBucket: "m-movil.appspot.com",
  messagingSenderId: "329445921322",
  appId: "1:329445921322:web:45846e6d162a479e05e953"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
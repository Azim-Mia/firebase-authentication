import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDztPR3SV0-VCFYbrn7mCp_y9mA53AcTbU",
  authDomain: "chatapp-80ce1.firebaseapp.com",
  projectId: "chatapp-80ce1",
  storageBucket: "chatapp-80ce1.appspot.com",
  messagingSenderId: "24363175800",
  appId: "1:24363175800:web:0f606207e87e9d99a1c28d",
  measurementId: "G-DBJM1HXP81"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
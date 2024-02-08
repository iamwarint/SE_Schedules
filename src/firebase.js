
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyArngwzT3-9iPN9fGtIUEqsTqX_MjaS6hA",
  authDomain: "se-project-87de4.firebaseapp.com",
  projectId: "se-project-87de4",
  storageBucket: "se-project-87de4.appspot.com",
  messagingSenderId: "1044138830726",
  appId: "1:1044138830726:web:f495e84e53343174d65a07",
  measurementId: "G-HXN45W8JYR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}
export const auth = getAuth(app);
export default app;

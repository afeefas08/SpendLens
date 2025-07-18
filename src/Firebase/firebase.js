import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "...",
  projectId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the import path

// Function to update the lastUpdated timestamp
export const updateTimestamp = async () => {
  await setDoc(doc(db, "metadata", "lastUpdated"), {
    timestamp: serverTimestamp(), // Automatically set the server timestamp
  });
};
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// read data from firestore
export default async function getCollection(collectionName) {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  const data = snapshot.docs.map((doc) => doc.data());
  return data;
}

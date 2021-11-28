import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = firestore.collection(collection);

    //the snapshot represents the collection at that moment in time & will contain the docs on it
    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        setError(error);
      }
    );
    //unsub on unmount
    return () => unsub();
  }, [collection]);
  return { documents, error };
};

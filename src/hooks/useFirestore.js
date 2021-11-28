import { useReducer, useEffect, useState } from "react";
import { firestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  const ref = firestore.collection(collection);

  //add doc boilerplate
  const addDocument = (doc) => {};

  //delete doc boilerplate
  const deleteDocument = (id) => {};

  //clean up if the component unmount whilist doing a request
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { addDocument, deleteDocument, state };
};

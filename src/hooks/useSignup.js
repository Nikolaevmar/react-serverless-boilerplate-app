import { useState } from "react";
import { fireauth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);

    try {
      //signup user
      const response = await fireauth.createUserWithEmailAndPassword(email,password);
      if (!response) {
        throw new Error("Could not sign up");
      }
      //add display name for user
      await response.user.updateProfile({ name });

      //dispatch login action
      dispatch({ type: "LOG_IN", payload: response.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

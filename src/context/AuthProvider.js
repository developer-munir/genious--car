import React, { createContext, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const singUpUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
        })
        return ()=> unsubscribe()
    },[])
  const userInfo = {
    name: "Munir",
    singUpUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

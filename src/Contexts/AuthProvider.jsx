import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase.init";
const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const registerWithPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => cleanUp();
  }, []);
  const value = { user, loading, googleLogin, registerWithPass, loginWithPass };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

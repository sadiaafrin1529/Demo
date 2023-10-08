import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from './firebase/Firebase';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [user,setUser] = useState('')   
const [error,setError] = useState('')   
const [loading,setLoading] = useState('')   
  
const auth = getAuth(app)

// new user create 
const newUser = (email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
    })
    .catch((error) => {
     const errorMessage = error.message;
     setError(errorMessage)
      });
} 
const login =(email,password) =>{
  signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
  
    const user = result.user;
    setUser(user)
   
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    setError(errorMessage)
  });
}


const logout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

useEffect(() => {
  setLoading(true)
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
  });
  return () => {
      return unsubscribe();
  };
}, []);


  const  information = {
    newUser,
    user ,
    logout,
    login
  }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { Component, useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { MainScreen } from "./screens";
import { auth } from './firebase';
import SignUp from './components/SignUp';

const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        setIsLogedIn(true);
      } else {
        setIsLogedIn(false);
        console.log("not loged in");
      }
  }); 
  },[]);
  return isLogedIn ? <MainScreen/> : <SignUp/>
};

export default App;
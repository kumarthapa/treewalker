import React, { useEffect, useContext, useState, createContext } from "react";
import { useHistory } from 'react-router-dom'
import { auth, db } from '../components/firebase'
import firebase from 'firebase'
const MessegeContext = createContext();

export const LoginAuth = () => {
  return useContext(MessegeContext);
};

export const ChatProvider = ({ children }) => {
  const history = useHistory();
  const [userData, setUserData] = useState(null)
  const [AllMsg, setAllMsg] = useState([])
  const [isLogin, setIsLogin] = useState('')

  const signInWithGoogle = (provider) => {
    auth.signInWithPopup(provider).then(res => {
      setIsLogin(true)
      //auth.signInWithRedirect(provider)
      history.push("/messenger")
    }).catch(err => console.log(err))
  }
  const sendMessage = (msg) => {
    db.collection('messages').add({
      msg,
      photo: userData.photoURL,
      username: userData.displayName,
      email: userData.email,
      currentTime: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserData(user)
    })

    db.collection('messages').orderBy('currentTime', 'desc').onSnapshot((snp)=>{
     //console.log("heloo snp == ",)
     setAllMsg(
       snp.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
       }))
       )
    })
  }, [])
  //console.log("heloo snp == ",AllMsg)
  const logout = () => {
    setIsLogin(false)
    auth.signOut()
    setUserData(null)
  }
  const value = {
    signInWithGoogle,
    logout,
    userData,
    isLogin,
    sendMessage,
    AllMsg
  };

  return <MessegeContext.Provider value={value}>{children}</MessegeContext.Provider>;
};
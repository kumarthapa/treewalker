import React, {useContext,useState, useEffect,createContext} from "react"
import {auth} from "../firebase"
const NewsContext = createContext();

export const AddItemCradAuth = () => {
  return useContext(NewsContext);
};

export const AddItemProvider = ({ children }) => {
  const [currentUser,setCurrentUser]=useState()
  const [cardData, setCardData] = useState();
  const [isopen, setIsOpen] = useState(false);
  const [istrue, setIstrue] = useState(false);

  const ItemListHandler = (result) => {
    setIsOpen(result)
  }
  const AddHandler = (actiondata) => {

    setCardData(actiondata)
    setIstrue(true)
  }

  const signup=(email,password)=>{
    return auth.createUserWithEmailAndPassword(email,password).then(res=>{
        console.log(res)
    })
}

const login=(email,password) =>{
    return auth.signInWithEmailAndPassword(email,password).then(res=>{
        console.log(res)
    })
}
const logout=()=>{
    return auth.signOut()
}
const forgetPassword=(email)=>{
    return auth.sendPasswordResetEmail(email).then(res=>{
        console.log(res)
    })
}
useEffect(()=>{
  const  unsubscriber=auth.onAuthStateChanged(user=>{
      setCurrentUser(user)
  })

  return unsubscriber
},[])


  const value = {
    ItemListHandler,
    isopen,
    AddHandler,
    cardData,
    istrue,
    signup,
    login,
    currentUser,
    logout,
    forgetPassword,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
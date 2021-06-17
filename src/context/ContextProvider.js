import React, { useContext, useState, createContext } from "react";
const NewsContext = createContext();

export const AddItemCradAuth = () => {
  return useContext(NewsContext);
};

export const AddItemProvider = ({ children }) => {
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




  const value = {
    ItemListHandler,
    isopen,
    AddHandler,
    cardData,
    istrue,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
import React, { useContext, useState, useEffect, createContext } from "react";
import Data from '../Data.json';
const SearchContext = createContext();

const SearchAuth = () => {
  return useContext(SearchContext);
};
export default SearchAuth
export const AddItemProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [items, setItems] = useState()
  useEffect(() => {
    setProductData(Data.products.data)
  }, [productData])

  const ItemSearchHandl = (searchitem) => {
    setItems(searchitem)
  }

  const value = {
    ItemSearchHandl,
    items,
    productData,
  };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
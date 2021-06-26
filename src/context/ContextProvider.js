import React, {useContext,useState, useEffect,createContext} from "react"
const SearchContext = createContext();

const SearchAuth = () => {
  return useContext(SearchContext);
};
export default SearchAuth
export const AddItemProvider = ({ children }) => {
  const [items,setItems] = useState()
  const ItemSearchHandl = (searchitem)=>{
    setItems(searchitem)
}


  const value = {
    ItemSearchHandl,
    items,
  };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};
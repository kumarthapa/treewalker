import React from 'react'
import Product from './component/Product';
import {AddItemProvider} from "./context/ContextProvider"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
function App() {
  return (
   <>
   <Router>
     <AddItemProvider>
       <Switch>
       <Route path="/" component={Product}/>
       </Switch>
     </AddItemProvider>
   </Router>
   </>
  );
}
export default App;
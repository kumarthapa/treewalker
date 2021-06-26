import React from 'react'
import Product from './component/Product';
import {AddItemProvider} from "./context/ContextProvider"
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
     <AddItemProvider>
       <Switch>
       <Route exact path="/" component={Product} />
       </Switch>
     </AddItemProvider>
   </Router>
   </>
  );
}
export default App;
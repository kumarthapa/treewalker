import React from 'react'
import Product from './component/Product';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
function App() {
  return (
   <>
   <Router>
   <Switch>
   <Route path="/" component={Product}/>
   </Switch>
   </Router>
   </>
  );
}
export default App;
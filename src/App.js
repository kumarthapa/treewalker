import React from 'react'
import Product from './component/Product';
import Signup from './component/LoginAuth/Signup';
import Login from './component/LoginAuth/Login';
import {AddItemProvider} from "./context/ContextProvider"
import PrivateRoute from "./context/PrivateRoute"
import Navbar from "./component/Navbar"
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
     <AddItemProvider>
     <Navbar />
       <Switch>
       <PrivateRoute exact path="/" component={Product} />
       <Route path="/signup" component={Signup}/>
       <Route  path="/login" component={Login}/>
       </Switch>
     </AddItemProvider>
   </Router>
   </>
  );
}
export default App;
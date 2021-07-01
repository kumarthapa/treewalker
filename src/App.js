import React from 'react'
import Messenger from './components/Messenger'
import {ChatProvider} from './context/MessageProvider'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
//import Loader from "./components/Loader"
function App() {
  return (
   <>
   <Router>
   <ChatProvider>
     <Navbar/>
   <Switch>
   <PrivateRoute path="/messenger" component={Messenger}/>
   <Route path="/" component={Home}/>
   </Switch>
   </ChatProvider>
   </Router>
   </>
  );
}
export default App;
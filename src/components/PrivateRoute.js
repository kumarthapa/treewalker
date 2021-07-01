import React from 'react';
import {LoginAuth} from '../context/MessageProvider'
import {Route,Redirect} from "react-router-dom";

const PrivateRoute=({component:Component,...rest})=>{
    const {isLogin} = LoginAuth()
    return(
        <Route
             {...rest}
             render={
                 (props)=>{
                   return  isLogin?<Component {...props}/>:<Redirect to="/"/>
                 }
             }

        />
    )

}
export default PrivateRoute;
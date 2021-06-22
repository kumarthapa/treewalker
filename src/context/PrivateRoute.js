import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {AddItemCradAuth} from "./ContextProvider"
const PrivateRoute = ({component:Component},...rest ) => {
    const {currentUser}=AddItemCradAuth()

    return (
       <Route
       {...rest}
       render={(props)=>{
        return currentUser?<Component {...props}/>:<Redirect to="/login"/>
       }}/>
    )
}

export default PrivateRoute
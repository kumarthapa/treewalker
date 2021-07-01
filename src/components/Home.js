import React from 'react';
import {LoginAuth} from '../context/MessageProvider';
import Login from '../components/Login';
import Messenger from './Messenger';
const Home = () => {
    const {isLogin} = LoginAuth()
    return (
       <>
       {isLogin?<Messenger/>:<Login/>}
       </>
    )
}

export default Home

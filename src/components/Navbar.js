import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import {LoginAuth} from '../context/MessageProvider'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
const classes = useStyles();
const {userData, logout} = LoginAuth()
const history=useHistory();


const LogoutHandler = () =>{
  //console.log("navbar pic",userData)
  if(userData){
    logout()
    history.push("/")
  }
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Messenger
          </Typography>
          <Avatar alt="profile-pic" src={userData?.photoURL} />
          <Button color="inherit" onClick={LogoutHandler}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

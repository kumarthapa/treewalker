import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InputField from './InputField'
import { LoginAuth } from '../context/MessageProvider'
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
const useStyles = makeStyles((theme) => ({
  messageContainer: {
    width: '70%',
    //height: '600px',
    //backgroundColor: 'rgba(244, 244, 244, 0.78)',
    borderRadius: '6px 6px 0px 0px',
    marginTop: '20px',
    marginLeft:'auto',
    marginRight:'auto',
   paddingTop:'10px',
    [theme.breakpoints.down("sm")]: {
      width: '90%',
      backgroundColor: '#fff',
    },
  },
  root: {
    maxWidth: 340,
    //margin: '0 auto',
    '& > * + *': {
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(8),
    },
   
  },
  textBox1: {
    backgroundColor: 'gray',
    padding: '6px',
    fontFamily: 'arial',
    borderRadius: '5px',
    '& > * + *': {
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 200,
    },
  },
  textBox2: {
    backgroundColor: '#efefef',
    padding: '6px',
    fontFamily: 'arial',
    borderRadius: '5px',
    maxWidth: 300,
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
    
  marginRight:'0px',
  marginLeft:'25rem',
  marginTop:'5px',
  [theme.breakpoints.down("sm")]: {
    marginLeft:'10rem',
    maxWidth: 200,
  },
  }
}));

export default function Messenger() {
  const classes = useStyles();
  const { AllMsg, userData } = LoginAuth()
  return (
    <>
      <div className={classes.messageContainer}>
        {
          AllMsg.map(message => message.email === userData?.email ?
             (<div className={classes.textBox2} key={message.id}>
              {message.msg}
            </div>)
            :(<div className={classes.root} key={message.id}>
              <Toolbar>
                <Avatar alt="profile-pic" src={message?.photo} />
                <span style={{ marginLeft: '8px', fontFamily: 'arial' }}> {message.username}</span>
              </Toolbar>
              <div className={classes.textBox1}>
                {message.msg}
              </div>
            </div>)
             
          )
        }
        <InputField />
      </div>

    </>
  );
}

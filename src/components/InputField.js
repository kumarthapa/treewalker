import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import {LoginAuth} from '../context/MessageProvider'
const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  inputBox:{
    padding: '20px 0px',
    display: 'flex',
    alignItems: 'center',
    margin:'10px 0px 0px 0px',
    width: '100%',
    borderRadius: '0px 0px 6px 6px',
  }
}));

export default function InputField() {
  const classes = useStyles();
  const {sendMessage} = LoginAuth()
  const [msg,setMsg] = useState()

  const sendMsg =(e)=>{
  e.preventDefault();
  sendMessage(msg)
  setMsg('')
  }
  return (
    <>
     <Paper className={classes.inputBox}>
     <form onSubmit={sendMsg} autoComplete="off">
     <InputBase
        type="text"
        name="userText"
        className={classes.input}
        placeholder="Write something..."
        onChange={(e)=>setMsg(e.target.value)}
        value={msg}
        required
      />
      </form>
      </Paper>
    </>
  );
}


import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        routeChange()
        return({username: username, password: password})
    }

    const routeChange = () =>{ 
      history.push('/Home');
    }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <TextField required id="standard-required" label="Username" onChange={handleUsernameChange}/>
        <TextField
        required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handlePasswordChange}
        />
        <Button type='button' onClick={handleSubmit} >Aceptar</Button>
        </div>
        </form>
  )}    

export default Login
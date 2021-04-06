import React, { useState } from 'react';

import './loginForm.scss';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid black',
    padding: '20px',
    width: '75%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const submitPost = () => {
  //   Axios.post('http://localhost:8081/api/create', { title, text });
  // };

  return (
    <div className="loginForm">
      <h1>Create login</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="submitButton"
          type="button"
          // onClick={submitPost}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

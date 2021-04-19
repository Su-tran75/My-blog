import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './loginForm.scss';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FirebaseContext } from '../Firebase';

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

const LoginForm = (props) => {
  const classes = useStyles();

  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true);
    }
    else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.loginUser(email, password)
      .then((user) => {
        console.log(user);
        setEmail('');
        setPassword('');
        props.history.push('/');
      })
      .catch((err) => {
        setError(err);
        setEmail('');
        setPassword('');
      });
    firebase.persistence(firebase.auth.Auth.Persistence.LOCAL);
  };

  return (
    <div className="loginForm">
      {error !== '' && <span className="error">{error.message}</span>}
      <h1>Login</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          type="Email"
          label="Email"
          id="outlined-basic email"
          required
          autoComplete="on"
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic password"
          label="Password"
          type="Password"
          required
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {btn ? <button className="submitButton">Connexion</button> : <button className="disabled" disabled>Connexion</button>}
        <div className="linkLogin">
          <Link className="link" to="/signUpForm">Not yet register? Sign up</Link>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  push: PropTypes.func,
};

export default LoginForm;

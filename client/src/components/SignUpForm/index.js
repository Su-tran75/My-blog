import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import './signUpForm.scss';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const SignUpForm = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      border: '2px solid black',
      padding: '20px',
      width: '85%',
      height: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '& > *': {
        margin: theme.spacing(1),
        width: '90%',
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '35ch',
    },
  }));

  const classes = useStyles();

  const firebase = useContext(FirebaseContext);

  const data = {
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  };

  const [values, setValues] = useState(data);

  const [error, setError] = useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    firebase.signupUser(email, password)
      .then((user) => {
        console.log(user);
        setValues({ ...data });
        props.history.push('/');
      })
      .catch((err) => {
        setError(err);
        setValues({ ...data });
      });
  };

  // handle error
  const errorMsg = error !== '' && <span className="error">{error.message}</span>;

  const {
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
  } = values;

  const btn = email === '' || password === '' || password !== confirmPassword ? <button className="disabled" disabled>Submit</button> : <button className="submitButton">Submit</button>;

  return (
    <div className="signUpForm">
      {errorMsg}
      <h1>Sign Up Form</h1>
      <div className={classes.root}>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            required
            autoComplete="on"
            onChange={handleChange('email')}
            value={email}
          />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              required
              autoComplete="off"
              onChange={handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={70}
            />
          </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirmPassword">Confirm password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirmPassword"
              type={showConfirmPassword ? 'text' : 'Password'}
              value={confirmPassword}
              required
              autoComplete="off"
              onChange={handleChange('confirmPassword')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirmPassword visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={130}
            />
          </FormControl>
          {btn}
        </form>
        <div className="linkSignin">
          <Link className="link" to="/loginForm">Already registerd? log in here</Link>
        </div>
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignUpForm;

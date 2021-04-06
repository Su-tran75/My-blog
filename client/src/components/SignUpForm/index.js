import React, { Fragment } from 'react';

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

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid black',
    padding: '20px',
    width: '75%',
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

const SignUpForm = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

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

  return (
    <div className="signUpForm">
      <h1>Sign Up Form</h1>
      <div className={classes.root}>
        <>
          <TextField
            label="Email"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
              type={values.showConfirmPassword ? 'text' : 'Password'}
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirmPassword visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={130}
            />
          </FormControl>
          <button
            className="submitButton"
            type="button"
            // onClick={submitPost}
          >
            Submit
          </button>
        </>
      </div>
    </div>
  );
};

export default SignUpForm;

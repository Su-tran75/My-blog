import React from 'react';
import { NavLink } from 'react-router-dom';
import './welcome.scss';

const Welcome = () => (
  <div className="btn">
    <NavLink to="/loginForm">
      <button className="logIn header-link" type="button">Log In</button>
    </NavLink>

    <NavLink to="/signUpForm">
      <button className="SignUp header-link" type="button">Sign up</button>
    </NavLink>
  </div>
);

export default Welcome;

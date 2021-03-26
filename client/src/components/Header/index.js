import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav>
      <a className="header-link header-link" href="/">Home</a>
      <a className="header-link">Create new post</a>
      <button className="logIn header-link">Log In</button>
      {/* if user === isLogged ? <button className="logout">Logout</button> : <button className="signIn">Sign In</button> */}
      <button className="SignUp header-link">Sign up</button>
    </nav>
  </header>
);

export default Header;

/*
  - <a> home, might be changed by a home icon
  - when user is logged :
    - add button to write a new post
    - add logout button

*/

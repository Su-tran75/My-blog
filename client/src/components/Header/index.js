import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <header className="header">
      <nav>
        <NavLink
          className="header-link header-link"
          to="/"
        >
          Home
        </NavLink>

        {/* // TODO rectifier islogged */}
        {!isLogged && (
          <>
            <NavLink
              className="header-link"
              to="/createPost"
            >
              Create post
            </NavLink>
            <NavLink
              to="/loginForm"
            >
              <button className="logIn header-link" type="button">Log In</button>
            </NavLink>
            <NavLink
              to="/signUpForm"
            >
              <button className="SignUp header-link" type="button">Sign up</button>
            </NavLink>
          </>
        )}
      </nav>

    </header>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;

/*
  - <a> home, might be changed by a home icon
  - when user is logged :
    - add button to write a new post
    - add logout button

*/

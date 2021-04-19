import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <header className="header">
    <nav>
      <NavLink className="header-link " to="/Welcome">Welcome</NavLink>

      <NavLink className="header-link " to="/">Posts</NavLink>

    </nav>

  </header>
);

export default Header;

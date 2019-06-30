import React from 'react';

import { Link } from 'react-router-dom';
import { NavBarStyle } from './NavBarStyle';

export default function NavBar() {
  return (
    <NavBarStyle className="container">
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>search</li>
        <span>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/search">Searchb</Link>
          </li>
        </span>
      </ul>
    </NavBarStyle>
  );
}

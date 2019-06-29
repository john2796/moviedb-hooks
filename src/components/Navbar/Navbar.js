import React from 'react';
import { NavBarStyle } from './NavBarStyle';

export default function NavBar() {
  return (
    <NavBarStyle className="container">
      <ul>
        <li>logo</li>
        <li>search</li>
        <span>
          <li>home</li>
          <li>login</li>
          <li>search</li>
        </span>
      </ul>
    </NavBarStyle>
  );
}

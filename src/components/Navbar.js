import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarStyle = styled.ul`
  /* --------------------------> navbar style <--------------------------- */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  span {
    display: flex;
  }
  li {
    margin-left: 25px;
  }
`;

export default function NavBar() {
  return (
    <NavBarStyle className="container">
      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/search">search</Link>
      </li>
    </NavBarStyle>
  );
}

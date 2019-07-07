import React from 'react';

function Navbar() {
  return (
    <nav className="header-nav container">
      <span>
        <a href="/">logo</a>
        <a href="/">home</a>
        <a href="/movies">movies</a>
        <a href="/celeb">celebrities</a>
        <a href="/news">news</a>
      </span>
      <span>
        <a href="/login">login</a>
        <a href="/signUp">sign up</a>
      </span>
    </nav>
  );
}
export default Navbar;

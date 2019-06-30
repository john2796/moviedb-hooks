import React from 'react';
import { AppStyle } from './AppStyle';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

export default function App() {
  return (
    <AppStyle>
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </AppStyle>
  );
}

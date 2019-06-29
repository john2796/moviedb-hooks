import React from 'react';
import { useSelector } from 'react-redux';
import { AppStyle } from './AppStyle';
import { addOne } from './store/actions/movieAction';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

export default function App() {
  const { counter } = useSelector(state => state.movieReducer);
  console.log(counter);

  return (
    <AppStyle>
      <NavBar />
      <Header />
      <Main />
      <Footer />
      <h1>{counter}</h1>
    </AppStyle>
  );
}

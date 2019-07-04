import React, { memo } from 'react';
import { HomeStyle } from '../styles/HomeStyle';

import Header from './Header';
import Main from './Main';

function Home() {
  return (
    <HomeStyle>
      <Header />
      <Main />
      <footer>
        <p>footer</p>
      </footer>
    </HomeStyle>
  );
}
export default memo(Home);

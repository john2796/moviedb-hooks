import React, { memo } from 'react';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default memo(Home);

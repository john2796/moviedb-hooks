import React, { memo } from 'react';
import { MainStyle } from './styles/MainStyle';
import Movies from './Movies';

const Main = () => (
  <MainStyle>
    <div className="container">
      <Movies />
    </div>
  </MainStyle>
);

export default memo(Main);

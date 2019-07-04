import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  return (
    <GlobalStyle>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </GlobalStyle>
  );
}

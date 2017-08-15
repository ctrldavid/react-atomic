import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Application } from './Application.jsx';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// Hot Module Replacement API

if (module.hot) {
  module.hot.accept('./Application.jsx', () => { render(Application); });
}


render(Application);
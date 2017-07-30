import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Test } from './Test.jsx';


const x = {
  a: 1,
  b: 2,
};

const y = {
  c: 3,
  d: 4,
};

console.log({...x, ...y});


console.log('hi');

const f = (
  a,
  b,
  c,
) => {
  console.log(a, b, c);
};


f(1,2,3);

f('this', 'is', 'sparta');
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Hot Module Replacement API

if (module.hot) {
  module.hot.accept('./Test.jsx', () => { render(Test); });
}


render(Test);
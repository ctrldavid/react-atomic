import React from 'react';
import ReactDOM from 'react-dom';

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

const Test = () => <div>lasers</div>;

console.log(Test);


ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Header from './Header';

const App = ({count, onClear}) => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-simple-nav</div>
    <Header {...{count, onClear}} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app-nav'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App idade={26}/>
  </React.StrictMode>,
  document.getElementById('root')
);


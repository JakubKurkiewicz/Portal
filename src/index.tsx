import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Reset } from 'styled-reset';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './tools/store';

ReactDOM.render(
  <Provider store={store}>
    <Reset/>
    <App />
  </Provider>,
  document.getElementById('root')
);


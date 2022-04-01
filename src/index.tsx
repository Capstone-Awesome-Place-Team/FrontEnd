import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


import Global from './shared/Global'
import GlobalStyle from './shared/GlobalStyle'

ReactDOM.render(
  <BrowserRouter>
  <Global>
    <GlobalStyle />
    <App />
    </Global>
  </BrowserRouter>,
  document.getElementById('root')
);


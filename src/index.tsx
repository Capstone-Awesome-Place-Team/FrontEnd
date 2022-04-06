import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import App from './App';


import Global from './shared/Global'
import GlobalStyle from './shared/GlobalStyle'

ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter>
  <Global>
    <GlobalStyle />
    <App />
    </Global>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


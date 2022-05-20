import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configStore';
import App from './App';

import Global from './shared/Global'
import GlobalStyle from './shared/GlobalStyle'
import BodyGlobal from './shared/BodyGlobal'
import ScrollToTop from './shared/ScrollTop';

ReactDOM.render(
  <Provider store={store}> 
  <BrowserRouter>
  <ScrollToTop>
  <div style={{ backgroundColor:"#E5E5E5", width:"100vw",height:"100vh", }}>
  <Global>
    <GlobalStyle />
    {/* <BodyGlobal> */}
    <App />
    {/* </BodyGlobal> */}
    </Global>
    </div>
    </ScrollToTop>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


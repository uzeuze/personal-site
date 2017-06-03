import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

import Router from './Router';
import store from './store';

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

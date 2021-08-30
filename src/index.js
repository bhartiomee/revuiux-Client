import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, history } from './store';
/*The connected-react-router library provides Redux bindings for React Router;
for example, the application's history can be read from a Redux store and
you can navigate to different routes in the application by dispatching actions to the store.*/
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

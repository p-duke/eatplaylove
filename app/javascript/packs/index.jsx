import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import movieApp from './reducers';
import App from './App';

ReactDOM.render(
  <Provider store={createStore(
    movieApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <BrowserRouter>
      <App  />
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);

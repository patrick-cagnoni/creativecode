import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalProvider as Provider } from 'context/Provider';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

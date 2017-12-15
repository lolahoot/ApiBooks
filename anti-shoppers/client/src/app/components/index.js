import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} "react-router-dom";
import {store} from "./redux/root-reducer";

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />,
    </BrowserRouter>
  </Provider>,
      document.getElementById('root'));
registerServiceWorker();

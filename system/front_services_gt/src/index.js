import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ToastContainer } from 'react-toastify';
import {Provider} from 'react-redux';
import {store} from './state/InitState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

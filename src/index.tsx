import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);


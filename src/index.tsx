import './styles/index.scss';

import {Provider} from "mobx-react";
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CardStore from "./store/CardStore";



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider CardStore={CardStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


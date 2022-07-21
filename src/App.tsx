import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import {Provider} from "mobx-react";
import React, {createContext} from 'react';

import Routers from "./router/routes";
import CardService from "./services/CardService";
import NetworkService from "./services/NetworkService";
import {ServicesNames} from "./services/ServicesNames";
import AppStore from "./store/AppStore";
import BasketStore from "./store/BasketStore";
import CardStore from "./store/CardStore";
import {StoresNames} from "./store/StoresNames";
import theme from "./styles/Theme";



function App() {


  const endpoint = process.env.REACT_APP_ENDPOINT as string;
  const token = process.env.REACT_APP_TOKEN as string;


  const basketStore = new BasketStore();
  const cardStore = new CardStore();
  const appStore = new AppStore();

  const networkService = new NetworkService(endpoint,token);
  const cardService = new CardService(networkService, cardStore);



  const stores = {
    [StoresNames.BasketStore]: basketStore,
    [StoresNames.CardStore]: cardStore,
    [StoresNames.AppStore]: appStore,
  };

  const services = {
    [ServicesNames.NetworkService]: networkService,
    [ServicesNames.CardService]: cardService,
  };


  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores} {...services}>

        <Routers/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import {Provider} from "mobx-react";
import React, {createContext} from 'react';

import Routers from "./router/routes";
import CardService from "./services/CardService";
import theme from "./styles/Theme";
import NetworkService from "./services/NetworkService";
import CardStore from "./store/CardStore";
import BasketStore from "./store/BasketStore";
import AppStore from "./store/AppStore";
import {StoresNames} from "./store/StoresNames";
import {ServicesNames} from "./services/ServicesNames";



function App() {


  const endpoint = process.env["ENDPOINT "] as string;
  console.log(endpoint);

  const basketStore = new BasketStore();
  const cardStore = new CardStore();
  const appStore = new AppStore();

  const networkService = new NetworkService("http://77.223.99.133:8080/",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo');
  const cardService = new CardService(networkService, cardStore);

  cardService.getPills();


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

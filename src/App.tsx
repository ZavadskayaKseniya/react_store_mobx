import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import {Provider} from "mobx-react";
import React, {createContext} from 'react';

import Routers from "./router/routes";
import CardService from "./services/CardService";
import theme from "./styles/Theme";



CardService();

enum stores {

  CardStore = "CardStore",
  AppStore = "AppStore",
  BasketStore = "BasketStore"

}

enum services {
  NetworkService="NetworkService",
  CardService="CardService"

}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores} {...services}>

        <Routers/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

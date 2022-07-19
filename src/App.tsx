import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import {Provider} from "mobx-react";
import React, {createContext} from 'react';


import Routers from "./router/routes";
import theme from "./styles/Theme";
import DataFetching from "./swagger/DataFetching";



enum stores {

  CardStore = "CardStore",
  AppStore = "AppStore",
  BasketStore = "BasketStore"

}

export const Context = createContext({});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <DataFetching/>
        <Routers/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

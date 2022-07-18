import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import {Provider} from "mobx-react";
import React, {createContext} from 'react';


import Routers from "./router/routes";
import theme from "./styles/Theme";


enum stores {

  CardStore = "CardStore",
  AppStore = "AppStore"

}

export const Context = createContext({});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <Routers/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import {Provider} from "mobx-react";
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes} from "react-router-dom";

import Header from "./components/system/Header";
import routes from "./router/routes";
import theme from "./styles/Theme";


enum stores {

  CardStore = "CardStore",
  AppStore = "AppStore"

}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider {...stores}>
        <Router>
          <div className="App">
            <Header/>
            {routes}
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

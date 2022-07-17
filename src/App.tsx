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
import HomePage from "./pages/HomePage";
import CardStore from "./store/CardStore";
import theme from "./styles/Theme";
import routes from "./router/routes";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider CardStore={CardStore}>
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

import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes} from "react-router-dom";

import {Provider} from "mobx-react";
import Header from "./components/system/header";
import HomePage from "./pages/HomePage";
import theme from "./styles/Theme";
import CardStore from "./store/CardStore";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider CardStore={CardStore}>
        <Router>
          <div className="App">
            <Header/>
            <Routes>
              <Route  path="/" element={<HomePage/>} />
              {/* <Route  path="" element={} /> */}
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

import './styles/App.modules.scss';

import {ThemeProvider} from "@mui/material";
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes} from "react-router-dom";

import Header from "./components/system/header";
import HomePage from "./pages/HomePage";
import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route  path="/" element={<HomePage/>} />
            {/* <Route  path="" element={} /> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

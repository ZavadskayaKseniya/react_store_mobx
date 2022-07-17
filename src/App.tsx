import './styles/App.modules.scss';



import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes} from "react-router-dom";

import Header from "./components/system/header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route  path="/" element={<HomePage/>} />
          {/* <Route  path="" element={} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

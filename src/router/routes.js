import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";

import Header from "../components/system/Header";
import CardPage from "../pages/CardPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";


const Routers = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route  path="/:id" element={<CardPage/>}/>
          <Route  path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default Routers;





import React, {Fragment, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";

import Header from "../components/system/Header";
import CardPage from "../pages/CardPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";


const MainPage = () => {
  return (
    <Fragment>
      <Header/>
      <HomePage/>
    </Fragment>
  );
};

const PillPage = () => {
  return (
    <Fragment>
      <Header/>
      <CardPage/>
    </Fragment>
  );
};



const Routers = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/" element={<MainPage/>}/>
          <Route  path="/:{id}" element={<PillPage/>}/>
          <Route  path="/*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default Routers;





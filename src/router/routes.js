import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";

import Header from "@/components/system/Header";
import BasketPage from "@/pages/BasketPage";
import CardPage from "@/pages/CardPage";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";



function getPage(Component) {
  return (
    <div className="App">
      <Header/>
      <Component/>
    </div>
  );
}

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={getPage(Auth)}/>
        <Route  path="/pill/:{id}" element={getPage(CardPage)}/>
        <Route path="/catalog" element={getPage(HomePage)} />
        <Route  path="/basket" element={getPage(BasketPage)}/>
        <Route  path="/*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default Routers;






import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes} from "react-router-dom";

import App from "../App";
import CardPage from "../pages/CardPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

const routers=(
  <Router>
    <Routes>
      <div>
        <Route exact path="/" element={<App/> } />
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/cardPage" element={<CardPage/>}/>
        <Route  path="/notFound" element={<NotFound/>}/>
      </div>
    </Routes>
  </Router>
);
export default routers;



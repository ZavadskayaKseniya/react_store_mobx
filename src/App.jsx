import './styles/App.modules.scss';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes} from "react-router-dom";

import Header from "./components/header";
import HomePage from "./pages/home-page";

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

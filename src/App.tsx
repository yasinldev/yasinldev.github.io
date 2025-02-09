import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
      <div className={'container'}>
          <div className={'header'}>
              <div className={'navbar'}>
                  <a href={'/'}>Home</a>
                  <a href={'/'}>About</a>
                  <a href={'/'}>Articles</a>
                  <a href={'/'}>Projects</a>
              </div>
          </div>
          <Router>
          <Routes>
              <Route path={'/'} element={<Home />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;

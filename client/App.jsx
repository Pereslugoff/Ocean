import React, { Component } from "react";
import PersonalityCalculator from "./components/PersonalityCalculator";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="nav">
          <div className="nav-left">
            <img src='https://www.flaticon.com/svg/static/icons/svg/3061/3061188.svg' className="wave-icon"></img>
            <h1>Ocean</h1>
          </div>
          <div className="nav-right">
            <h2>About</h2>
          </div>
        </div>
        <Switch>
          <Route path="/calculator">
            <div className="calc-container">
              <PersonalityCalculator />
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

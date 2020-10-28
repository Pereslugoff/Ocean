import React, { Component } from "react";
import PersonalityCalculator from "./components/PersonalityCalculatorPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/calculator">
            <div className="calc-container">
              <PersonalityCalculator />
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import PersonalityCalculator from "./PersonalityCalculator";

const App = () => {
  return (
    <div className="app-container">
      <div id="app-header">
        <h1>Ocean | A personality calculator for Reddit</h1>
      </div>
      <div className="calc-container">
        <PersonalityCalculator />
        <PersonalityCalculator />
      </div>
    </div>
  );
};

export default App;

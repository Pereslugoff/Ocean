import React from "react";
import PersonalityCalculator from "./PersonalityCalculator";



const App = () => (
  <div className="app-container">
    <div id="app-header">
      <h1>Ocean</h1>
      <h2>A personality calculator for Reddit</h2>
    </div>
    <div className="calc-container">
      <PersonalityCalculator />
      <PersonalityCalculator />
    </div>
  </div>
)

export default App;

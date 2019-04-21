import React, { Component } from "react";
import PersonalityCalculator from "./PersonalityCalculator";

class App extends Component {
  state = {
    numCalculators: 1
  };

  addCalculator = () => {
    const { numCalculators } = this.state;
    this.setState({ numCalculators: numCalculators + 1 });
  };
  render() {
    const calculators = [];
    const { numCalculators } = this.state;
    for (let i = 0; i < numCalculators; i++) {
      calculators.push(<PersonalityCalculator />);
    }
    return (
      <div className="app-container">
        <div className="app-header">
          <h1>Ocean</h1>
          <h2>A personality calculator for Reddit</h2>
        </div>
        <div className="calc-container">
          {calculators}
          <div className="add-calculator" onClick={this.addCalculator}>
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { useState } from "react";
import SubredditLanding from "./SubredditLanding";
import UserLanding from "./UserLanding";
import TypePicker from "./TypePicker";

const PersonalityCalculatorPage = () => {

  const [calculatorType, setCalculatorType] = useState('');

  return (
    <div className="single-calc-container">
      {!calculatorType ? (
        <TypePicker handleType={setCalculatorType} />
      ) : calculatorType === "user" ? (
        <UserLanding />
      ) : (
        <SubredditLanding />
      )}
    </div>
  );
}

export default PersonalityCalculatorPage
import React from "react";

const TypePicker = props => {
  const { handleType } = props;
  return (
    <div className="picker-container">
      <div className="type-selection" onClick={() => handleType("subreddit")}>
        Search Subreddits
      </div>
      <span className="type-border" />
      <div className="type-selection" onClick={() => handleType("user")}>
        Search Users
      </div>
    </div>
  );
};

export default TypePicker;

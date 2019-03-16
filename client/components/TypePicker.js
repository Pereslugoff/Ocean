import React from "react";

const TypePicker = (props) => {
  const {handleType} = props
  return (
    <div className="picker-container">
      <button className="btn" onClick={() => handleType("subreddit")}>Search Subreddits</button>
      <button className="btn"onClick={() => handleType("user")}>Search Users</button>
    </div>
  );
};

export default TypePicker;

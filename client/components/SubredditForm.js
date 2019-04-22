import React from "react";

const SubredditForm = props => (
  <form
    onChange={event => props.handleFormChange(event)}
    className="calc-form"
    autoComplete="off"
  >
    <input
      type="text"
      name="name"
      id="name"
      placeholder={`Subreddit Name: "Politics"`}
      autoComplete="off"
      required
    />
    <label>Number of Posts:</label>
    <input
      type="range"
      min="1"
      max="4"
      name="limit"
      id="limit"
      className="slider"
    />
    <label>Depth of Comments:</label>
    <input
      type="range"
      min="1"
      max="4"
      name="depth"
      id="depth"
      className="slider"
    />
    <div className="select-group">
      <select name="sort">
        <option value="">Sort by:</option>
        <option value="top">Top</option>
        <option value="hot">Hot</option>
        <option value="newPosts">New</option>
        <option value="controversial">Controversial</option>
      </select>
      <select name="timeInterval">
        <option value="">From this:</option>
        <option value="hour">hour</option>
        <option value="day">day</option>
        <option value="week">week</option>
        <option value="month">month</option>
        <option value="year">year</option>
        <option value="all">all</option>
      </select>
    </div>
  </form>
);
export default SubredditForm;

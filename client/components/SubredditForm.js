import React from "react";

const SubredditForm = ({ handleFormChange, depth, limit }) => (
  <form
    onChange={event => handleFormChange(event)}
    className="calc-form"
    autoComplete="off"
  >
    <input
      type="text"
      name="name"
      id="name"
      placeholder={`Subreddit Name: e.g. Politics`}
      autoComplete="off"
      required
    />
    <div className="slider-fields">
      <label>Number of Posts: {limit}</label>
      <input
        type="range"
        min="1"
        max="4"
        name="limit"
        value={limit}
        id="limit"
        className="slider"
      />
    </div>
    <div className="slider-fields">
      <label>Depth of Comments: {depth}</label>
      <input
        type="range"
        min="1"
        max="4"
        name="depth"
        value={depth}
        id="depth"
        className="slider"
      />
    </div>
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

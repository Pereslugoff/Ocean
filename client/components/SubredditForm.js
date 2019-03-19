import React, { Component } from "react";

const SubredditForm = props => {
  return (
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
      <input
        type="number"
        min="1"
        name="limit"
        id="limit"
        placeholder="Num Posts: 1"
        autoComplete="off"
        required
      />
      <input
        type="number"
        min="1"
        name="depth"
        id="depth"
        placeholder="Comment Depth: 1"
        autoComplete="off"
        required
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
};

export default SubredditForm;

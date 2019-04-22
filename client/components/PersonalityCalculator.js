import React, { Component } from "react";
import SubredditLanding from "./SubredditLanding";
import UserLanding from "./UserLanding";
import TypePicker from "./TypePicker";

export default class PersonalityCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: "subreddit"
    };
  }

  handleType = type => {
    this.setState({ dataType: type });
  };

  render() {
    const { dataType } = this.state;
    return (
      <div className="single-calc-container">
        {!dataType.length > 0 ? (
          <TypePicker handleType={this.handleType} />
        ) : dataType === "user" ? (
          <UserLanding />
        ) : (
          <SubredditLanding />
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import SubredditForm from "./SubredditForm";
import SubredditQuery from "./SubredditQuery";

export default class SubredditLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      limit: 1,
      depth: 1,
      data: false,
      sort: "hot",
      timeInterval: "day",
      posts: [],
      errors: false,
      errorMessage: ""
    };
  }

  handleQuery = () => {
    const { name } = this.state;
    if (name.length) {
      this.setState({ data: true });
    } else {
      this.setState({
        errors: true,
        errorMessage: "Enter a subreddit or choose one below!"
      });
    }
  };

  handleFormChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const suggested = [
      "Poltics",
      "The_Donald",
      "Buddhism",
      "Scifi",
      "Javascript",
      "GraphQL",
      "WebDev"
    ];

    const limit = Number(this.state.limit);
    const depth = Number(this.state.depth);
    const { sort, data, name, timeInterval, errors, errorMessage } = this.state;

    const queryDictionary = {
      hot: { name, limit, depth, timeInterval },
      top: { name, limit, depth, timeInterval },
      controversial: { name, depth },
      newPosts: { name, depth }
    };
    const queryVars = queryDictionary[sort];

    return (
      <div className="subreddit-landing-container">
        {data ? (
          <SubredditQuery queryType={sort} queryVars={queryVars} />
        ) : (
          <div className="subreddit-landing-inner">
            <span className={errors ? "show" : ""}>{errorMessage}</span>
            <SubredditForm
              handleFormChange={this.handleFormChange}
              limit={limit}
              depth={depth}
            />
            <div className="suggested-subreddits">
              <span id="suggested-title">Suggested Subreddits:</span>
              {suggested.map((subreddit, index) => {
                return (
                  <div
                    className="subreddit-btn"
                    key={`SL${index}`}
                    onClick={() => this.setState({ name: subreddit })}
                  >
                    {subreddit}
                  </div>
                );
              })}
            </div>
            <button className="btn" onClick={() => this.handleQuery()}>
              Get Comments!
            </button>
          </div>
        )}
      </div>
    );
  }
}

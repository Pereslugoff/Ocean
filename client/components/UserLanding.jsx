import React, { Component } from "react";
import UserForm from "./UserForm";
import UserQuery from "./UserQuery";

export default class UserLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      data: false,
      errors: false,
      errorMessage: ""
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery = () => {
    const { username } = this.state;
    if (username.length) {
      this.setState({ data: true });
    } else {
      this.setState({
        errors: true,
        errorMessage: "Enter a user or choose one below!"
      });
    }
  };

  handleFormChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const { username, data, errors, errorMessage } = this.state;

    const famousUsers = [
      "spez",
      "kn0thing",
      "neiltyson",
      "GovSchwarzenegger",
      "Here_Comes_The_King",
      "williamshatner"
    ];
    return (
      <div className="user-landing-container">
        {data ? (
          <UserQuery username={username} />
        ) : (
          <div className="get-user-comments-button-container">
            <span className={errors ? "show" : ""}>{errorMessage}</span>
            <UserForm handleFormChange={this.handleFormChange} />
            <div className="user-buttons-container">
              Suggested Users:
              {famousUsers.map((user, index) => {
                return (
                  <div
                    className="user-btn"
                    key={`UB${index}`}
                    onClick={() =>
                      this.setState({ username: user, data: true })
                    }
                  >
                    {user}
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

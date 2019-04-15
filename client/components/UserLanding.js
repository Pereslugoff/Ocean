import React, { Component } from "react";
import UserForm from "./UserForm";
import UserQuery from "./UserQuery";

export default class UserLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      data: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleQuery = this.handleQuery.bind(this)
  }

  handleQuery = () => {
    this.setState({ data: true })
  }

  handleFormChange = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    const { username, data } = this.state;

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
          {
            data
            ?
            <UserQuery username={username} />
            :
            <div className="get-user-comments-button-container">
              <UserForm handleFormChange={this.handleFormChange} />
              <div className="user-buttons-container">
                <div className="recommended-users">
                  {famousUsers.map((user, index) => {
                    return (
                      <button
                        className="user-btn"
                        key={`UB${index}`}
                        onClick={() => this.setState({ username: user })}
                      >
                        {user}
                      </button>
                    );
                  })}
                </div>
                </div>
              <button className="btn" onClick={() => this.handleQuery()}>Get Comments!</button>
            </div>
          }
      </div>
    );
  }
}
import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import UserForm from "./UserForm";
import query from "../queries/getUserComments";
import QueryTest from "./QueryTest";

export default class UserLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      data: false,
      posts: []
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleQuery(){
    this.setState({ data: true })
  }

  handleFormChange(event) {
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
            <QueryTest username={username} />
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


{/* <ApolloConsumer>
{client => (
  <button
    className="btn"
    onClick={() => {
      client
        .query({
          query,
          variables: { username }
        })
        .then(data =>
          this.props.handleData(data.data.user.comments)
        );
    }}
  >
    Get Comments!
  </button>
)}
</ApolloConsumer> */}
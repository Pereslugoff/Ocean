import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import hot from "../queries/getHotPosts";
import top from '../queries/getTopPosts';
import latest from '../queries/getNewPosts'
import SubredditForm from './SubredditForm';

export default class SubredditLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      limit: 1,
      depth: 1,
      data: false,
      sort: 'hot',
      timeInterval: 'day',
      posts: []
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const suggested = ["Poltics", "The_Donald", "Buddhism", "Scifi", "Javascript", "GraphQL", "WebDev"]

    const {name} = this.state;
    const limit = Number(this.state.limit);
    const depth = Number(this.state.depth);
    const {timeInterval} = this.state
    const {sort} = this.state

    let queryType;
    
    if(sort === 'hot'){
      queryType = hot
    } else if(sort === 'top'){
      queryType = top
    } else if (sort === 'new'){
      queryType = latest
    }
    return (
      <div className="subreddit-landing-inner">
        <SubredditForm handleFormChange={this.handleFormChange} />
        <div className="subreddit-buttons-container">
          <div className="suggested-subreddits">
            {
              suggested.map((subreddit, index) => {
                return (
                  <button
                    className="subreddit-btn"
                    key={`SL${index}`}
                    onClick={() => this.setState({ name: subreddit })}
                  >
                    {subreddit}
                  </button>
                )
              })
            }
          </div>
        <ApolloConsumer className="get-comments-apollo">
          {client => (
            <button
              className="btn"
              onClick={() => {
                client
                  .query({
                    query: queryType,
                    variables: { name, limit, depth, timeInterval }
                  })
                  .then(data => this.props.handleData(data.data.subreddit[sort]));
              }}
            >
              Get Comments!
            </button>
          )}
        </ApolloConsumer>
        </div>
      </div>
    );
  }
}

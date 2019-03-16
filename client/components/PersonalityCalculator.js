import React, { Component } from "react";
import SubredditDataList from "./SubredditDataList";
import PersonalityGraph from "./PersonalityGraph";
import SubredditLanding from "./SubredditLanding";
import UserLanding from './UserLanding'
import UserDataList from './UserDataList'
import TypePicker from './TypePicker'

export default class PersonalityCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: false,
      posts: [],
      usercomments: [],
      dataType: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleData = this.handleData.bind(this)
    this.handleCommentData = this.handleCommentData.bind(this)
    this.handleType = this.handleType.bind(this)
  }

  handleType(type){
    this.setState({ dataType: type })
  }

  handleFormChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleData(newData){
    this.setState({ posts: newData, data: true})
  }

  handleCommentData(newData){
    this.setState({ usercomments: newData, data: true })
  }



  render() {

    let text;

    if (this.state.data) {
      if(this.state.posts.length > 0){
        text = this.state.posts
          .map(post => {
            return post.comments.map(comment => {
              return comment.body;
            });
          })
          .join("");
      } else {
        text = this.state.usercomments.map(comment => {
          return comment.body
        })
        .join("")
      }
    }

    return (
      <div className="single-calc-container">
        {
            !this.state.dataType.length > 0
          ?
            <TypePicker handleType={this.handleType} />
          :
            this.state.data ? (
              <div className="personality-view">
                <PersonalityGraph text={text} />
                {
                  this.state.dataType === "user"
                  ?
                    <UserDataList usercomments={this.state.usercomments} />
                  :
                    <SubredditDataList posts={this.state.posts} />
                }
              </div>
            ) : (
              <div className="form-view">
                {
                  this.state.dataType === "user"
                  ?
                    <UserLanding handleData={this.handleCommentData} />
                  :
                    <SubredditLanding handleData={this.handleData} />
                }
              </div>
            )
        }
      </div>
    );
  }
}

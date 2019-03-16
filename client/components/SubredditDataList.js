import React, { Component } from 'react'


export default class SubredditDataList extends Component{
  render(){
    const { posts } = this.props
    return (
      <div className="data-container">
        {
          posts.map(post => {
            return (
              <div className="post-group" key={post.id}>
                <h5>{post.title}</h5>
                <ul>
                  {
                    post.comments.map((comment) => {
                      return (
                        <li key={comment.id}>{comment.body}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}
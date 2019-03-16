import React, { Component } from 'react'


export default class SubredditDataList extends Component{
  render(){
    const { posts } = this.props
    console.log(posts)
    return (
      <div className="data-container">
        {
          posts.map(post => {
            return (
              <div className="post-group">
                <h5>{post.title}</h5>
                <ul>
                  {
                    post.comments.map(comment => {
                      return (
                        <li>{comment.body}</li>
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
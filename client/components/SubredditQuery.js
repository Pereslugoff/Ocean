import React from 'react'
import { Query } from "react-apollo";
import RadarChartQuery from './RadarChartQuery';
import hot from "../queries/getHotPosts";
import top from '../queries/getTopPosts';
import controversial from '../queries/getControversialPosts';
import newPosts from '../queries/getNewPosts';
import SubredditDataList from './SubredditDataList';


const SubredditQuery = ({queryType, queryVars}) => {
  const queryDictionary = {
    "hot": hot,
    "top": top,
    "controversial": controversial,
    "newPosts": newPosts,
  }

  const subredditQuery = queryDictionary[queryType]
  return (
    <Query query={subredditQuery} variables={queryVars}>
      {({ loading, error, data}) => {
        if (loading) return <h1>Loading</h1>;
        if (error) return null;
        const posts = data.subreddit[queryType]
        const text = posts.map(post => {
          return post.comments.map(comment => {
            return comment.body;
          });
        })
        .join("");
        console.log(text)
        return (
          <div>
            <RadarChartQuery text={text} />
            <SubredditDataList posts={posts} />
          </div>
        )
      }}
    </Query>
  )
}

export default SubredditQuery
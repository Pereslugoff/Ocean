import React from "react";
import { Query } from "react-apollo";
import RadarChartQuery from "./RadarChartQuery";
import hot from "../queries/getHotPosts";
import top from "../queries/getTopPosts";
import controversial from "../queries/getControversialPosts";
import newPosts from "../queries/getNewPosts";
import SubredditDataList from "./SubredditDataList";
import { css } from "@emotion/core";
import { DotLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 35px auto 35px auto;
`;

const SubredditQuery = ({ queryType, queryVars }) => {
  const queryDictionary = {
    hot: hot,
    top: top,
    controversial: controversial,
    newPosts: newPosts
  };

  const subredditQuery = queryDictionary[queryType];
  return (
    <Query query={subredditQuery} variables={queryVars}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <DotLoader
              css={override}
              sizeUnit={"px"}
              size={60}
              color={"#ef43e4"}
            />
          );
        if (error) return <p className="show">Error! Please try again</p>;
        const posts = data.subreddit[queryType];
        const content = posts
          .map(post => {
            return post.comments.map(comment => {
              return comment.body;
            });
          })
          .join("");
        return (
          <div>
            <RadarChartQuery content={content} />
            <SubredditDataList posts={posts} />
          </div>
        );
      }}
    </Query>
  );
};

export default SubredditQuery;

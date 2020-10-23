import React from "react";
import { Query } from "react-apollo";
import query from "../queries/getUserComments";
import UserDataList from "./UserDataList";
import RadarChartQuery from "./RadarChartQuery";
import { css } from "@emotion/core";
import { DotLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 35px auto 35px auto;
`;

const UserQuery = ({ username }) => (
  <Query query={query} variables={{ username }} errorPolicy="all">
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
      const content = data.user.comments.map(comment => comment.body).join("");
      return (
        <div className="data-list">
          <RadarChartQuery content={content} />
          <UserDataList usercomments={data.user.comments} />
        </div>
      );
    }}
  </Query>
);

export default UserQuery;

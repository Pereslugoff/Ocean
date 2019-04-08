import React from 'react'
import { Query } from "react-apollo";
import query from '../queries/getUserComments';
import UserDataList from './UserDataList';
import RadarChartQuery from './RadarChartQuery';
import { css } from '@emotion/core';
import { DotLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const UserQuery = ({username}) => (
  <Query query={query} variables={{username}}>
    {({ loading, error, data}) => {
      if (loading) return (
        <DotLoader
        css={override}
        sizeUnit={"px"}
        size={60}
        color={'#ef43e4'}
      />
        );
      if (error) return null;
      const text = data.user.comments.map(comment => comment.body).join('')
      return (
        <div>
          <RadarChartQuery text={text} />
          <UserDataList usercomments={data.user.comments} />
        </div>
      //   <DotLoader
      //   css={override}
      //   sizeUnit={"px"}
      //   size={60}
      //   color={'#ef43e4'}
      // />
      )
    }}
  </Query>
)

export default UserQuery
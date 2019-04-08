import React from 'react'
import { Query } from "react-apollo";
import query from '../queries/getUserComments';
import UserDataList from './UserDataList';
import RadarTest from './RadarTest';

const QueryTest = ({username}) => (
  <Query query={query} variables={{username}}>
    {({ loading, error, data}) => {
      if (loading) return <h1>Loading</h1>;
      if (error) return null;
      return (
        <div>
          <RadarTest />
          <UserDataList usercomments={data.user.comments} />
        </div>
      )
    }}
  </Query>
)

export default QueryTest
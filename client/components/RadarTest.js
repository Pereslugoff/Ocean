import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const GET_COMMENTS = gql`
  {
    ROOT_QUERY @client
  }
`;

const RadarTest = () => (
  <Query query={GET_COMMENTS}>
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading radar test</h1>
      console.log(data)
      return <h1>Check console</h1>
    }}
  </Query>
);

export default RadarTest
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import query from "../queries/getPersonality";
import PersonalityRadarChart from './PersonalityRadarChart'


const RadarTest = ({ text }) => (
  <Query query={query} variables={{text}}>
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading radar test</h1>
      const traits = data.getPersonality.personality_traits_and_scores
      return <PersonalityRadarChart traits={traits} />
    }}
  </Query>
);

export default RadarTest
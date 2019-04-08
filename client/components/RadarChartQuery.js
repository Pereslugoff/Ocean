import React from 'react';
import { Query } from 'react-apollo';
import query from "../queries/getPersonality";
import PersonalityRadarChart from './PersonalityRadarChart'


const RadarChartQuery = ({ text }) => (
  <Query query={query} variables={{text}}>
    {({ loading, error, data }) => {
      if (loading) return <h1>Loading radar test</h1>
      const traits = data.getPersonality.personality_traits_and_scores
      console.log(traits)
      return (
        // <h1>Check console</h1>
        <PersonalityRadarChart traits={traits} />
      )
    }}
  </Query>
);

export default RadarChartQuery
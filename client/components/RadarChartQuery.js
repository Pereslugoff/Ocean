import React from "react";
import { Query } from "react-apollo";
import query from "../queries/getPersonality";
import PersonalityRadarChart from "./PersonalityRadarChart";
import { css } from "@emotion/core";
import { DotLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 35px auto 35px auto;
`;

const RadarChartQuery = ({ text }) => (
  <Query query={query} variables={{ text }}>
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

      const traits = data.getPersonality.personality_traits_and_scores;
      console.log(traits);
      return (
        // <h1>Check console</h1>
        <PersonalityRadarChart traits={traits} />
      );
    }}
  </Query>
);

export default RadarChartQuery;

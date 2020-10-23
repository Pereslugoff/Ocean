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

const RadarChartQuery = ({ content }) => (
  <Query query={query} variables={{ content }}>
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
      const traits = data.getPersonality.personality_traits_and_scores;
      return <PersonalityRadarChart traits={traits} />;
    }}
  </Query>
);

export default RadarChartQuery;

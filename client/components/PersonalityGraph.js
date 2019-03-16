import React, { Component } from "react";
import { Query, ApolloConsumer } from "react-apollo";
import query from "../queries/getPersonality";
import PersonalityRadarChart from './PersonalityRadarChart'

export default class PersonalityGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personality: [],
      data: false
    };
  }
  render() {
    const { text } = this.props;

    return (
      <div className="chart-container">
        {
          this.state.data
          ?
          <PersonalityRadarChart traits={this.state.personality} />
          :
          <ApolloConsumer>
            {client => (
              <button
              className="btn"
                onClick={() => {
                  client
                    .query({
                      query,
                      variables: { text }
                    })
                    .then(data => {
                      this.setState({
                        personality:
                          data.data.getPersonality.personality_traits_and_scores,
                          data: true
                      });
                      
                    });
                }}
              >
                Get Personality!
              </button>
            )}
          </ApolloConsumer>
        }
      </div>
    );
  }
}
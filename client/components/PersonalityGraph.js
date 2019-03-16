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
    console.log("PersonalityGraph has the following data", this.state.personality);
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

// {
//   data.data.getPersonality.personality_traits_and_scores.map(trait => {
//     return (
//       <p>{trait}</p>
//     )
//   })
// }

{
  /* <Query query={query} variables={{text}}>
{({ loading, error, data}) =>{
  if(loading) return "Loading...";
  if(error) return `Error! ${error.message}`
  if(data){
    console.log(data)
  }
  return (
    <div>
      check console
    </div>
  )
}}
</Query> */
}


{/* <ul>
{
  this.state.personality.map(trait => {
    return (
      <li>{trait}</li>
    )
  })
}
</ul> */}
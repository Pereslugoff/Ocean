import gql from 'graphql-tag'

export default gql`
  query GetPersonality($content: String!){
    getPersonality(content: $content){
      personality_traits_and_scores
    }
  }
`
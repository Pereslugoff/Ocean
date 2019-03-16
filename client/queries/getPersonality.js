import gql from 'graphql-tag'

export default gql`
  query GetPersonality($text: String!){
    getPersonality(text: $text){
      personality_traits_and_scores
    }
  }
`
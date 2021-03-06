import gql from 'graphql-tag'

export default gql`
 query SubredditComments($name: String!, $limit: Int!, $depth: Int!, $timeInterval: String!){
   subreddit(name: $name){
     hot(limit: $limit, timeInterval: $timeInterval){
       title
       id
       comments(depth: $depth){
         id
         body
       }
     }
   }
 }
`
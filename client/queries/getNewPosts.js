import gql from 'graphql-tag'

export default gql`
 query SubredditNewComments($name: String!, $limit: Int!, $depth: Int!, $timeInterval: String!){
   subreddit(name: $name){
     new(limit: $limit, timeInterval: $timeInterval){
       title
       comments(depth: $depth){
         body
       }
     }
   }
 }
`
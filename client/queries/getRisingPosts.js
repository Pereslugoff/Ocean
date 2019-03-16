import gql from 'graphql-tag'

export default gql`
 query SubredditRisingPosts($name: String!, $limit: Int!, $depth: Int!, $timeInterval: String!){
   subreddit(name: $name){
     rising(limit: $limit, timeInterval: $timeInterval){
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
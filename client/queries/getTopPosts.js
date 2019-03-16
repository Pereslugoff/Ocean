import gql from 'graphql-tag'

export default gql`
 query SubredditTopComments($name: String!, $limit: Int!, $depth: Int!, $timeInterval: String!){
   subreddit(name: $name){
     top(limit: $limit, timeInterval:$timeInterval){
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
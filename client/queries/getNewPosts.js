import gql from 'graphql-tag'

export default gql`
 query SubredditNewPosts($name: String!, $depth: Int!){
   subreddit(name: $name){
     newPosts{
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
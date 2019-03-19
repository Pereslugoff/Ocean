import gql from 'graphql-tag'

export default gql`
 query SubredditControversialPosts($name: String!, $depth: Int!){
   subreddit(name: $name){
    controversial{
       id
       title
       comments(depth: $depth){
         id
         body
       }
     }
   }
 }
`
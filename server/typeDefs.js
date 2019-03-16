const { gql } = require('apollo-server')

module.exports = typeDefs = gql`
  type Comment {
    author: User
    id: String
    body: String
  }

  type User {
    id: ID!
    username: String!
    comments(depth: Int, limit: Int): [Comment!]
  }

  type Post {
    title(depth: Int, limit: Int): String
    id: String
    comments(depth: Int, limit: Int): [Comment!]
  }

  type Subreddit {
    name: String
    hot(count: Int, limit: Int, timeInterval: String): [Post]
    top(count: Int, limit: Int, timeInterval: String): [Post]
    newPosts(count: Int, limit: Int, timeInterval: String): [Post]
    controversial(count: Int, limit: Int, timeInterval: String): [Post]
    rising(count: Int, limit: Int, timeInterval: String): [Post]
  }

  type Watson {
    word_count: String
    word_count_message: String
    personality_traits_and_scores: [String]
    needs_traits_and_scores: [String]
    values_traits_and_scores: [String]
  }

  type Query {
    "A simple type for getting started!"
    user(username: String!): User!
    subreddit(name: String): Subreddit
    getPersonality(text: String): Watson
  }
`

const path = require('path');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const app = express();

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(express.static(path.join(__dirname, '../public/')))
server.applyMiddleware({ app, path: '/graphql' });

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
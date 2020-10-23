require('dotenv/config')
const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')

const app = express();
const port = process.env.PORT || 3000;


const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({app, path: '/graphql'});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.listen({port}, function () {
  console.log(`Your server, listening on port ${port}`);
});

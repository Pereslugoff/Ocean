const path = require('path');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const app = express();
// const port = process.env.PORT || 3000;


const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(express.static(path.join(__dirname, '../public/')))


app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

server.applyMiddleware({app});
app.listen(process.env.PORT, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
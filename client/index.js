import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './components/App'
import QueryTest from './components/QueryTest'

// const cache = new InMemoryCache({
//   dataIdFromObject: object => object.id
// });


const client = new ApolloClient({
  uri: "/graphql",
  // cache
});

// cache.writeData({
//   data: {
//     manUalcomments: [],
//   },
// });



const Root = () => {
  console.log(client.cache.data)
  return (
  <ApolloProvider client={client}>
    {/* <h1>Test</h1> */}
    <QueryTest username={"baby_back_ribz"}/>
    {/* <App /> */}
  </ApolloProvider>
  )
};

render(<Root />, document.getElementById("app"));
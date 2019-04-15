import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './components/App'

const client = new ApolloClient({
  uri: "/graphql",
});

const Root = () => {
  return (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  )
};

render(<Root />, document.getElementById("app"));
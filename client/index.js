import ApolloClient from "apollo-boost";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from './components/App'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});



const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<Root />, document.getElementById("app"));
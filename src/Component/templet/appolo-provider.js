import React from 'react';
import { ApolloProvider,ApolloClient,HttpLink,ApolloLink,InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { graphql_endpoint } from '../../constants/graphqlApi'
const httpLink = new HttpLink({ uri:graphql_endpoint, fetch:fetch});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('auth_token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});
const client=new ApolloClient({
    cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
});
const ApolloClientLayout=({children})=>{
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
export default ApolloClientLayout
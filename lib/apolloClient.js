// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://cuet.education/source/graphql', // 👈 Replace with your live WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

import React from 'react';
import { ApolloProvider, useQuery } from 'react-apollo';
import client from './client';
import { SEARCH_REPOSITORIES } from './graphql';

// client.query({query: ME}).then(result => console.log(result))
const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンジニア"
}

const App: React.FC = () => {
  
  return (
    <ApolloProvider client={client}>
      <Name />
    </ApolloProvider>
  );
}

const Name: React.FC = () => {
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, { variables: VARIABLES });
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return <div></div>
}

export default App;

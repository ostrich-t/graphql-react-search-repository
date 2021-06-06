import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './client'
import Content from './components/Content'

// client.query({query: ME}).then(result => console.log(result))

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Content />
    </ApolloProvider>
  )
}

export default App

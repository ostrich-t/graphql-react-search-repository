import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { SEARCH_REPOSITORIES } from '../graphql';
import Form from './Form';

const DEFAULT_STATE = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: "フロントエンジニア"
}

const Content: React.FC = () => {
  const [query, setQuery] = React.useState(DEFAULT_STATE.query);
  const [repositoryCount, setRepositoryCount] = React.useState(0);
  const [repositoryUnit, setRepositoryUnit] = React.useState<'Repository' | 'Repositories'>('Repositories');

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, { variables: { ...DEFAULT_STATE ,query }});
  console.log(data)
  useEffect(() => {
    if (!loading && !error) {
      const count = data.search.repositoryCount;
      const unit = count === 1 ? 'Repository' : 'Repositories';
      setRepositoryCount(count);
      setRepositoryUnit(unit);
    }
  }, [loading, error, data])

  return (
    <div>
      <Form query={query} setQuery={setQuery} />
      <div>GitHub Repositories Search Result - {repositoryCount} {repositoryUnit}</div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error {error.message}</p> : null}
    </div>
  )
}

export default Content;
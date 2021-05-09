import React, { useEffect } from 'react';
import { useQuery } from 'react-apollo';
import { SEARCH_REPOSITORIES } from '../graphql';
import Form from './Form';

export type typeQuery = {
  first: number | null;
  after: string | null;
  last: number | null;
  before: string | null;
  query: string;
}
const PER_PAGE = 5;
const DEFAULT_STATE: typeQuery = {
  first: PER_PAGE,
  after: null,
  last: null,
  before: null,
  query: "フロントエンジニア"
}

const Content: React.FC = () => {
  const [query, setQuery] = React.useState<typeQuery>(DEFAULT_STATE);
  const [repositoryCount, setRepositoryCount] = React.useState(0);
  const [repositoryUnit, setRepositoryUnit] = React.useState<'Repository' | 'Repositories'>('Repositories');

  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, { variables: { ...query }});
  console.log(data)
  useEffect(() => {
    if (!loading && !error) {
      const count = data.search.repositoryCount;
      const unit = count === 1 ? 'Repository' : 'Repositories';
      setRepositoryCount(count);
      setRepositoryUnit(unit);
    }
  }, [loading, error, data]);

  const goNext = (endCursor: string) => {
    setQuery({
      ...query,
      first: PER_PAGE,
      after: endCursor,
      last: null,
      before: null
    })
  }

  const goPrevious = (startCursor: string) => {
    setQuery({
      ...query,
      first: null,
      after: null,
      last: PER_PAGE,
      before: startCursor
    })
  }

  return (
    <div>
      <Form query={query} setQuery={setQuery} />
      <div>GitHub Repositories Search Result - {repositoryCount} {repositoryUnit}</div>
      {loading ? <p>Loading...</p> : (
        <>
          <ul>
            {data.search.edges.map((edge: any, index: number) => {
              const node = edge.node
              return (
                <li key={index}>
                  <a href={node.url}>{node.name}</a>
                </li>
              )
            })}
          </ul>
          {data.search.pageInfo.hasPreviousPage ? 
            <button
              onClick={() => goPrevious(data.search.pageInfo.startCursor)}
            >
              Previous
            </button> 
            : 
            null
          }
          {data.search.pageInfo.hasNextPage ? 
            <button
              onClick={() => goNext(data.search.pageInfo.endCursor)}
            >
              Next
            </button> 
            : 
            null
          }
        </>
      )}
      {error ? <p>Error {error.message}</p> : null}
    </div>
  )
}

export default Content;
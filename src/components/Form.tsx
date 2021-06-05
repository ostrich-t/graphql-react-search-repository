import React from 'react'
import { typeQuery } from './Content'

interface FormProps {
  query: typeQuery
  setQuery: React.Dispatch<React.SetStateAction<typeQuery>>
}

const Form: React.FC<FormProps> = ({ query, setQuery }) => {
  return (
    <form>
      <input
        value={query.query}
        onChange={(event) => {
          setQuery({ ...query, query: event.target.value })
        }}
      />
    </form>
  )
}

export default Form

import React from 'react';

interface FormProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({ query, setQuery }) => {
  return (
    <form>
      <input value={query} onChange={(event) => {setQuery(event.target.value)}} />
    </form>
  )
}

export default Form;
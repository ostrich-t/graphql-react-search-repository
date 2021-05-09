import React from 'react';

interface StarButtonProps {
  node: any
}

const StarButton: React.FC<StarButtonProps> = ({ node }) => {
  const totalCount = node.stargazers.totalCount;
  const starUnit = node.stargazers.totalCount === 1 ? 'star' : 'stars'
  
  return (
    <button>{totalCount} {starUnit}</button>
  )
}

export default StarButton;
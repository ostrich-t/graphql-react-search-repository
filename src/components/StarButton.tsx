import React from 'react';

interface StarButtonProps {
  node: any
}

const StarButton: React.FC<StarButtonProps> = ({ node }) => {
  const totalCount = node.stargazers.totalCount;
  const starCount = totalCount === 1 ? '1 star' : `${totalCount} stars`;
  const viwerHasStarred = node.viewerHasStarred ? 'starred' : '-';
  
  return (
    <button>{starCount} | {viwerHasStarred}</button>
  )
}

export default StarButton;
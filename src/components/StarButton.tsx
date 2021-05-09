import React from 'react';

interface StarButtonProps {
  node: any
  onClick: (id: string) => void
}

const StarButton: React.FC<StarButtonProps> = ({ node, onClick }) => {
  const totalCount = node.stargazers.totalCount;
  const starCount = totalCount === 1 ? '1 star' : `${totalCount} stars`;
  const viwerHasStarred = node.viewerHasStarred ? 'starred' : '-';
  
  return (
    <button onClick={() => onClick(node.id)}>{starCount} | {viwerHasStarred}</button>
  )
}

export default StarButton;
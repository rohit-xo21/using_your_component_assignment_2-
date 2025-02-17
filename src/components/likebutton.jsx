import React from 'react';

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ color: isLiked ? 'red' : 'black' }}
    >
      {isLiked ? '❤️' : '🤍'}
    </button>
  );
};

export default LikeButton;
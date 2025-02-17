import React from 'react';
import LikeButton from './LikeButton';

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={`${post.username}'s profile`} className="profile-picture" />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onClick={() => onLikeToggle(post.id)} />
      <style jsx>{`
        .post-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin: 16px;
          width: 300px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          color: #333;
        }

        .profile-picture {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-bottom: 8px;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          font-size: 16px;
          margin-top: 8px;
        }

        button:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default PostCard;
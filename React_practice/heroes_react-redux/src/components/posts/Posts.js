import React from 'react';
import './posts.scss';
import { useGetPostsQuery } from '../../store/socialApi';

const Posts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <div className='post-title'
            onClick={(e) => {
              if (e.currentTarget.parentNode.className === 'active') {
                e.currentTarget.parentNode.className = '';
              } else {
                e.currentTarget.parentNode.className = 'active';
              }
            }}
          >
            {post.title}
          </div>
          <div className="body">{post.body}</div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

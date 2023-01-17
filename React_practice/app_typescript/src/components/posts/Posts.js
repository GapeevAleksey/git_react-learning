import React, { useState } from 'react';
import './posts.scss';
import {
  useAddPostMutation,
  useGetPostsQuery,
  useRemovePostMutation,
} from '../../store/socialApi';

const Posts = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [removePost] = useRemovePostMutation();
  const [titlePost, setTitlePost] = useState('');
  const [textPost, setTextPost] = useState('');

  const deletePost = async (id) => {
    await removePost(id);
  };
  const addNewPost = async (newPost) => {
    await addPost({
      id: newPost.id,
      title: newPost.title,
      body: newPost.body,
    });
  };

  return (
    <>
      <div>
        <form>
          <p>
            <input
              type="text"
              onChange={(e) => {
                setTitlePost(e.target.value);
              }}
              value={titlePost}
            />
          </p>
          <p>
            <textarea
              rows="10"
              cols="45"
              onChange={(e) => {
                setTextPost(e.target.value);
              }}
              value={textPost}
            />
          </p>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addNewPost({
                id: posts[posts.length - 1].id + 1,
                title: titlePost,
                body: textPost,
              });
              setTitlePost('');
              setTextPost('');
            }}
          >
            Send
          </button>
        </form>
      </div>
      <ul>
        {posts
          ?.map((post) => (
            <li key={post.id}>
              <div
                className="post-title"
                onClick={(e) => {
                  if (e.currentTarget.parentNode.className === 'active') {
                    e.currentTarget.parentNode.className = '';
                  } else {
                    e.currentTarget.parentNode.className = 'active';
                  }
                }}
              >
                {post.id}. {post.title}
              </div>
              <div
                className="remove-post"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                &times;
              </div>
              <div className="body">{post.body}</div>
            </li>
          ))
          .reverse()}
      </ul>
    </>
  );
};

export default Posts;

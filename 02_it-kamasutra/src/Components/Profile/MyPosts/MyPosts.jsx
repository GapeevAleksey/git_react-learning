import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../Redux/profile-reducer';

import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map((post) => {
    return <Post id={post.id} message={post.message} url={post.url} />;
  });
  let newPostElement = React.createRef();

  let addPost = () => {
    const action = addPostActionCreater();
    props.dispatch(action); // props.dispatch({type: 'ADD-POST'})
  };

  const onChangePost = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreater(text);
    props.dispatch(action);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          value={props.profilePage.newPostText}
          onChange={onChangePost}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

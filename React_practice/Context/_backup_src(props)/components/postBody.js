import PostBtnPanel from './postBtnPanel';
import PostText from './postText';

const PostBody = (props) => {
  const { handleClick, state } = props;
  return (
    <>
      <PostText state={state}/>
      <PostBtnPanel handleClick={handleClick}/>
    </>
  );
};

export default PostBody;

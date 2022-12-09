import './postText.css';
const PostText = (props) => {
  const {state} = props
  const style = {
    fontSize: state.fontSize,
    fontWeight: state.bold ? 'bold' : 'normal',
  };
  return (
    <div className="post-text">
      <div style={style}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolor
        quam neque! Illo pariatur assumenda ducimus! Minima, ullam. Sed nam,
        corporis tenetur autem expedita velit molestiae adipisci sit blanditiis
        cupiditate.
      </div>
    </div>
  );
};

export default PostText;

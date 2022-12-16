const PostBtnPanel = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <button onClick={() => handleClick('fontSizeInc')}>шрифт +2</button>
      <button onClick={() => handleClick('fontSizeDec')}>шрифт -2</button>
      <button onClick={() => handleClick('bold')}>выделить жирным</button>
    </div>
  );
};

export default PostBtnPanel;

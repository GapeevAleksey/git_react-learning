import { useContext } from 'react';
import StyleContext from './services/styleContext';
import './postBtnPanel.css';
const PostBtnPanel = () => {
  const { initState, state, handleClick } = useContext(StyleContext);

  return (
    <div>
      <button className="btn-panel" onClick={() => handleClick('fontSizeInc')}>
        Шрифт +2
      </button>
      <button className="btn-panel" onClick={() => handleClick('fontSizeDec')}>
        Шрифт -2
      </button>
      <button className="btn-panel" onClick={() => handleClick('bold')}>
        Выделить жирным
      </button>
      <button
        className="btn-panel"
        onClick={() => {
          if (JSON.stringify(initState) !== JSON.stringify(state)) {
            handleClick('reset');
          }
        }}
      >
        Сбросить
      </button>
    </div>
  );
};

export default PostBtnPanel;

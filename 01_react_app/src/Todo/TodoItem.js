import PropTypes from 'prop-types';
import { useContext } from 'react';
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: '.5rem 1rem',
    margin: '0 0 .5rem 0',
    border: '1px solid #333 ',
  },
  input: {
    marginRight: '1rem',
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.complited) {
    classes.push('done');
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.complited}
          style={styles.input}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        <strong>{index + 1}. </strong>
        {todo.title}
      </span>
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;

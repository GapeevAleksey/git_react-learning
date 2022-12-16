import { Component } from 'react';
import './todo-list-item.css';

class ToDoListItem extends Component {
  render() {
    const { data, onDeleteItem, onToggleProp } = this.props;
    return data.map((item) => {
      const clazzes = item.selected ? 'todo-item selected' : 'todo-item';
      return (
        <li className={clazzes}>
          <span
            onClick={() => {
              onToggleProp(item.id, item.selected);
            }}
          >
            {item.toDoText}
          </span>
          <div className="impotant">{item.impotant ? 'Важное' : ''}</div>
          <button
            onClick={() => {
              onDeleteItem(item.id);
            }}
          >
            Удалить
          </button>
        </li>
      );
    });

    // <li className='todo-item'>
    //   <span>{data[0].toDoText}</span>

    //   <p>{toString(data[0].impotant)}</p>
    //   <button>DEL</button>
    // </li>
  }
}
export default ToDoListItem;

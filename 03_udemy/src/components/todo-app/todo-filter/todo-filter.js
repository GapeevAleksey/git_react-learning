import { Component } from 'react';
import './todo-filter.css';

class ToDoFilter extends Component {
  
  render() {
    const { onFilter } = this.props;
    return (
      <div className="todo-filter">
        <span>Отсортировать:</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            onFilter();
          }}
        >
          Важные
        </button>
      </div>
    );
  }
}
export default ToDoFilter;

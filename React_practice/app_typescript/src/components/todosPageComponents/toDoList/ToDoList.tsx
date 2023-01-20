import React from 'react';
import { ITodo } from '../../../interfaces/interfaces';

type ToDoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

const ToDoList: React.FC<ToDoListProps> = ({ todos, onRemove, onToggle }) => {
  if (!todos.length) {
    return <p className="center">Задачи отсутствуют</p>;
  }
  return (
    <ul>
      {todos?.map((todo) => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('complited');
        }
        return (
          <li key={todo.id} className={classes.join(' ')}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  onToggle(todo.id);
                }}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => {
                  e.preventDefault();
                  onRemove(todo.id);
                }}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;

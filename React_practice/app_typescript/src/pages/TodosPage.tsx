import React, { useState } from 'react';
import ToDoForm from '../components/todosPageComponents/toDoForm/ToDoForm';
import ToDoList from '../components/todosPageComponents/toDoList/ToDoList';
import { ITodo } from '../interfaces/interfaces';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      'Вы действительно хотите удалить данную задачу?'
    );
    if (shouldRemove) {
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    }
  };
  const toggleHandler = (id: number) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    });
  };

  return (
    <>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};
export default TodosPage;

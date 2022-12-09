import TodoList from './Todo/TodoList';
import React from 'react';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todosProps, setTodosProps] = React.useState([
    { id: 1, complited: false, title: 'Купить хлеб' },
    { id: 2, complited: false, title: 'Купить масло' },
    { id: 3, complited: false, title: 'Купить кефир' },
  ]);

  function toggleTodo(id) {
    setTodosProps(
      todosProps.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodosProps(todosProps.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodosProps(
      todosProps.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>New React App</h1>
        <AddTodo onCreate={addTodo} />
        {todosProps.length ? (
          <TodoList todos={todosProps} onToggle={toggleTodo} />
        ) : (
          <p>У Вас нет задач!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;

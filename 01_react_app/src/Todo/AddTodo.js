import React, { useState } from 'react';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue('');

  function submitHandler(e) {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add ToDo</button>
    </form>
  );
}

export default AddTodo;

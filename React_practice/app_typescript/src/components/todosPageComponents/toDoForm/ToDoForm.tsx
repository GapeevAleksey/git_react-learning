import React, { useState } from 'react';

interface ToDoFormProps {
  onAdd(title: string): void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const KeyUpHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Введите название новой задачи"
        value={title}
        onChange={changeHandler}
        onKeyUp={KeyUpHandler}
      />
      <label htmlFor="title" className="active">
        Введите название новой задачи
      </label>
    </div>
  );
};

export default ToDoForm;

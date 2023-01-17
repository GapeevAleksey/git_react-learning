// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAddHeroMutation } from '../../redux/heroesApi';
import { heroesAdd } from '../heroesList/heroesSlice';

const HeroesAddForm = () => {
  const [newPerson, setNewPerson] = useState({});
  const [addHero, { isError }] = useAddHeroMutation();

  const addPerson = async () => {
    await addHero({ ...newPerson }).unwrap();
    setNewPerson({});
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(newPerson);
        addPerson();
      }}
      className="border p-4 shadow-lg rounded"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          onChange={(e) => {
            setNewPerson((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          onChange={(e) => {
            setNewPerson((prevState) => ({
              ...prevState,
              description: e.target.value,
              id: Math.floor(Math.random() * 10000),
            }));
          }}
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: '130px' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          onChange={(e) => {
            setNewPerson((prevState) => ({
              ...prevState,
              element: e.target.value,
            }));
          }}
          required
          className="form-select"
          id="element"
          name="element"
        >
          <option>Я владею элементом...</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="lion">Lion</option>
          <option value="fish">Fish</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;

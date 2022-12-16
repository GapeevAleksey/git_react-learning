// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useDispatch } from 'react-redux';
import { heroFilter } from './filterSlice';
const HeroesFilters = () => {
  const dispatch = useDispatch();
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button
            onClick={() => dispatch(heroFilter('all'))}
            className="btn btn-outline-dark active"
          >
            Все
          </button>
          <button
            onClick={() => dispatch(heroFilter('cat'))}
            className="btn btn-danger"
          >
            Cat
          </button>
          <button
            onClick={() => dispatch(heroFilter('dog'))}
            className="btn btn-primary"
          >
            Dog
          </button>
          <button
            onClick={() => dispatch(heroFilter('lion'))}
            className="btn btn-success"
          >
            Lion
          </button>
          <button
            onClick={() => dispatch(heroFilter('fish'))}
            className="btn btn-warning"
          >
            Fish
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;

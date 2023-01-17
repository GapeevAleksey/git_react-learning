import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchHeroes } from './heroesSlice';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import { useGetHeroesQuery } from '../../redux/heroesApi';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
  const [qty, setQty] = useState('');
  const { data = [], isLoading } = useGetHeroesQuery(qty);

  if (isLoading) return <Spinner />;
  return (
    <>
      <ul>
        <li>
          <select value={qty} onChange={(e) => setQty(e.target.value)}>
            <option value="">all</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </li>

        {data.map((hero) => {
          return (
            <HeroesListItem
              key={hero.id}
              id={hero.id}
              name={hero.name}
              description={hero.description}
              element={hero.element}
            />
          );
        })}
      </ul>
    </>
  );

  // const filteredHeroesSelector = createSelector(
  //   (state) => state.filter.filter,
  //   (state) => state.heroes.heroes,
  //   (filter, heroes) => {
  //     if (filter === 'all') {
  //       return heroes;
  //     } else {
  //       return heroes?.filter((hero) => hero.element === filter);
  //     }
  //   }
  // );

  // const { heroesLoadingStatus } = useSelector((state) => state.heroes);

  // const filterdHeroes = useSelector(filteredHeroesSelector);
  // console.log(filterdHeroes);
  // const dispatch = useDispatch();
  // const { request } = useHttp();

  // useEffect(() => {
  //   dispatch(fetchHeroes());

  //   // eslint-disable-next-line
  // }, []);

  // if (heroesLoadingStatus === 'loading') {
  //   return <Spinner />;
  // } else if (heroesLoadingStatus === 'error') {
  //   return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  // }

  // const renderHeroesList = (arr) => {
  //   if (arr.length === 0) {
  //     return <h5 className="text-center mt-5">Героев пока нет</h5>;
  //   }
  //   // {arr.length === 0 && <h5 className="text-center mt-5">Героев пока нет</h5>}

  //   return arr.map((hero) => {
  //     return (
  //       <HeroesListItem
  //         key={hero.id}
  //         id={hero.id}
  //         name={hero.name}
  //         description={hero.description}
  //         element={hero.element}
  //       />
  //     );
  //   });
  // };

  // const elements = renderHeroesList(filterdHeroes);
  // return <ul>{elements}</ul>;
};

export default HeroesList;

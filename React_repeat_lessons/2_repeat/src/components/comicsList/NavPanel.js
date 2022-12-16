import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import useCockServices from '../../services/CockServices';
import './comicsList.scss';

const NavPanel = ({ currentIngredient, setCurrentIngredient }) => {
  const cockServices = useCockServices();
  const navPanelRef = useRef(null);
  const [ingredients, setIngredients] = useState([]);
  const [ingsSearch, setIngsSearch] = useState('');

  const transformIngsList = (list) => {
    const cocksDB = list.map((item) => item['strIngredient1']);
    // console.log(cocksDB);
    return cocksDB.sort(); 
  };

  const showIngsList = (filter) => {
    return ingredients.map((ing) => {
      if (ing.toLowerCase().indexOf(filter.toLowerCase(), 0) === 0) {
        return (
          <li
            className={
              currentIngredient === ing ? 'ings-item__active' : 'ings-item'
            }
            key={ing}
            onClick={() => {
              setCurrentIngredient(ing);
              localStorage.setItem('CurrentIngredient', ing);
              localStorage.setItem(
                'navPanelScrollY',
                document.querySelector('.navPanel').getBoundingClientRect().top
              );
            }}
          >
            {ing}
          </li>
        );
      }
    });
  };

  // const ingsList = useMemo(
  //   () =>
  //     cockServices
  //       .getIngredientsList()
  //       .then((res) => setIngredients(transformIngsList(res.drinks)))
  //       .then(() => console.log('useMemo')),
  //   []
  // );

  useEffect(() => {
    cockServices
      .getIngredientsList()
      .then((res) => setIngredients(transformIngsList(res.drinks)))
      .then(()=>console.log('LOAD_INGLIST'));
  }, []);

  useEffect(() => {
    const activeIng = document.querySelector('.ings-item__active');
    setTimeout(() => {
      if (activeIng) {
        console.log(activeIng);
        activeIng.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, 500);
  }, [ingredients]);

  // ---> Прокрутка navPanel по координатам из localStorage ---

  // useEffect(() => {
  //   const navPanelScrollY = localStorage.getItem('navPanelScrollY');
  //   setTimeout(() => {
  //     if (navPanelScrollY) {
  //       navPanelRef.current.scrollTo(0, 0 - navPanelScrollY + 190);
  //     }
  //   }, 500);
  // }, []);

  // ---< Прокрутка navPanel по координатам из localStorage ---

  return (
    <div ref={navPanelRef} className="nav-cocks">
      <input
        value={ingsSearch}
        className="nav-cocks__search"
        placeholder="filter..."
        onChange={(e) => setIngsSearch(e.target.value)}
      />
      <ul className="navPanel">{showIngsList(ingsSearch)}</ul>
    </div>
  );
};
export default NavPanel;

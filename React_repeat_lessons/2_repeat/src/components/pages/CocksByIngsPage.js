import '../comicsList/comicsList.scss';
import CocksList from '../comicsList/CocksList';
import NavPanel from '../comicsList/NavPanel';
import { useEffect, useState } from 'react';

const CocksByIngsPage = () => {
if (!localStorage.getItem('CurrentIngredient')) {
  localStorage.setItem('CurrentIngredient', 'Amaretto')
}

  const initialIng = localStorage.getItem('CurrentIngredient');
  const [currentIngredient, setCurrentIngredient] = useState(initialIng);



  return (
    <>
      <div className="comics__list">
        <NavPanel
          setCurrentIngredient={setCurrentIngredient}
          currentIngredient={currentIngredient}
        />
        <CocksList currentIngredient={currentIngredient} />
      </div>
    </>
  );
};
export default CocksByIngsPage;

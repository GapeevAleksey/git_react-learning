import styles from './CocktailModal.module.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCocktailModal } from '../../app/coctailsSlice';
const CocktailModal = ({ children }) => {
  const dispatch = useDispatch();
  const cocktailsSlice = useSelector((state) => state.cocktailsSlice);
  const { cocktailModal } = cocktailsSlice;
  
  return (
    <>
      <div
        className={
          cocktailModal
            ? `${styles.cocktailModal} ${styles.active}`
            : styles.cocktailModal
        }
        onClick={() => dispatch(closeCocktailModal())}
      >
        <div
          className={styles.cocktailModal__content}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default CocktailModal;

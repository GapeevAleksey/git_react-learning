import React from 'react';
import { useGetAllGoodsQuery } from '../redux/marketApi';
import styles from './goods.module.css';

const GoodsPage = () => {
  const { data: goods, isLoading } = useGetAllGoodsQuery();
  const showGoods = () => {
    if (isLoading) {
      return <span>Loading...</span>;
    }
    return goods?.map(({ image, title, price }) => {
      return (
        <li className={styles.cardBody}>
          <img className={styles.image} src={image} alt={title} />

          <div>{title}</div>
          <div>price: {price}$</div>
        </li>
      );
    });
  };

  return <ul className={styles.cards}>{showGoods()}</ul>;
};

export default GoodsPage;

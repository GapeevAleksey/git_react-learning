import React from 'react';

const CoctailCard = ({ strDrink, strDrinkThumb }) => {
  return (
    <li>
      <div className="cardImg">
        <img src={strDrinkThumb} alt="" />
      </div>
      <span>{strDrink}</span>
    </li>
  );
};

export default CoctailCard;

import '../app/app.css';
import React, { memo } from 'react';
import { IProduct } from '../../interfaces/interfaces';

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = memo(({ product }) => {
  return (
    <div key={product.id} className="card">
      <div className="card-image">
        <img className="" src={product.image} />
      </div>
      <span className="card-title1">{product.title}</span>
      <div className="card-action1">
        <span>price: {product.price}$</span>
        <button className="waves-effect waves-light btn yellow lighten-1 black-text">
          Buy
        </button>
      </div>
    </div>
  );
});

export default Product;

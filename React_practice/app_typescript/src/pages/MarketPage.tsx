import React, { useContext } from 'react';
import '../components/app/app.css';
import CreateProduct from '../components/marketComponents/CreateProduct';
import Modal from '../components/marketComponents/Modal';
import Product from '../components/marketComponents/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../interfaces/interfaces';

const MarketPage: React.FC = () => {
  const { products, addProduct, loading, error } = useProducts();
  const { modal, open, close } = useContext(ModalContext);
  const onCreateHandler = (product: IProduct): void => {
    addProduct(product);
    close();
  };

  // ========================

  // const fName: string = '1';
  // fName && console.log('!!!');

  // ========================

  return (
    <div className="mt2">
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={onCreateHandler} />
        </Modal>
      )}
      <ul className="products-list">
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
      <div className="btn-modal" onClick={open}>
        +
      </div>
    </div>
  );
};

export default MarketPage;

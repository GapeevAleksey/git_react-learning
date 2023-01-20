import axios from 'axios';
import React, { useState } from 'react';
import { IProduct } from '../../interfaces/interfaces';
import Error from './Error';

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const productData: IProduct = {
  
  title: '',
  price: 19.95,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit.',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
  rating: { rate: 4.9, count: 120 },
};

const CreateProduct: React.FC<CreateProductProps> = ({ onCreate }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim().length < 3) {
      setError('Incorrect data');
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>(
      'https://fakestoreapi.com/products/',
      productData
    );

    response.data.id = Math.floor(Math.random() * 100000 + 20)
    onCreate(response.data);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setValue(e.target.value);
  };
  return (
    <div className="row" onClick={(e) => e.stopPropagation()}>
      <form className="col s12" onSubmit={submitHandler}>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Input product title"
              id="first_name"
              type="text"
              className="validate"
              value={value}
              onChange={changeHandler}
            />
            {Error && <Error error={error} />}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <button className="btn ">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;

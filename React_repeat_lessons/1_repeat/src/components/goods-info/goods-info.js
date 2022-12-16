import './goods-info.css';

const GoodsInfo = ({goodsCounter, counteLikesGoods}) => {
  return (
    <div className="app-info">
      <div className="card text-bg-secondary mb-3">
        <h2 className="card-header">Информация о товарах</h2>
        <div className="card-body">
          <h5 className="card-title">Количество товаров: {goodsCounter}</h5>
          <h5 className="card-title">Количество популярных товаров: {counteLikesGoods}</h5>
        </div>
      </div>
    </div>
  );
};

export default GoodsInfo;

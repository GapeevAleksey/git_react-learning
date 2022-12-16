import GoodsListItem from '../goods-list-item/goods-list-item';
import './goods-list.css';

const GoodsList = ({ goodsDB, isLike, isDisLike, onDelete }) => {
  const goods = goodsDB.map((good) => {
    const { id, ...goodProps } = good;

    return (
      <GoodsListItem
        key={id}
        id={id}
        {...goodProps}
        isLike={isLike}
        isDisLike={isDisLike}
        onDelete={onDelete}
      />
    );
    // <GoodsListItem
    //   key={good.id}
    //   name={good.name}
    //   price={good.price}
    //   status={good.status}
    // />
  });

  return (
    // <div className="card text-bg-warning  mb-3">
    <div className="card-body goods-add">
      <ul className="list-group">{goods}</ul>
    </div>
    // </div>
  );
};

export default GoodsList;

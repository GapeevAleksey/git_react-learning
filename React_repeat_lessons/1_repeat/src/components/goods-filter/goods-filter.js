import './goods-filter.css';

const GoodFilter = ({ filterGoods, filterType }) => {
  const buttons = [
    { id: 1, title: 'Все товары', value: 'allGoods' },
    { id: 2, title: 'Популярные товары', value: 'popGoods' },
    { id: 3, title: 'Товары дороже 8000$', value: 'richGoods' },
  ];

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons.map((button) => {
        return (
          <button
            key={button.id}
            type="button"
            className={
              'btn' + (filterType === button.value ? ' btn-dark' : ' btn-light')
            }
            onClick={() => filterGoods(button.value)}
          >
            {button.title}
          </button>
        );
      })}
    </div>
  );
};

export default GoodFilter;

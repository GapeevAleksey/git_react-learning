import { Component } from 'react';
import GoodsAdd from '../goods-add/goods-add';
import GoodFilter from '../goods-filter/goods-filter';
import GoodsInfo from '../goods-info/goods-info';
import GoodsList from '../goods-list/goods-list';
import GoodsSearch from '../goods-search/goods-search';
import './app.css';
import Test from './test';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, name: '_first', price: 7899, status: '' },
        { id: 2, name: '_second', price: 2499, status: '' },
      ],
      loadStatus: false,
      idCounter: 2,
      searchString: '',
      filterType: 'allGoods', // Все товары, ['popGoods' -  популярные, 'richGoods' - дороже 1000$]
    };
    this.goodsNotFound = false;
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((res) => {
        const resDB = res.map((item) =>({
                  id: this.state.idCounter + item.id,
                  name: item.title.split(' ').slice(0, 2).join(' '),
                  price: (Math.floor(Math.random() * 100)) * 100,
                  status: (Math.floor(Math.random() * 100) > 90 ? 'like' : ''),
                }))
            this.setState({
                data: [...this.state.data, ...resDB]
            })
      });

  }

  _onToggleStatus = (id, good, typeStatus) => {
    if (good.id === id) {
      if (good.status === typeStatus) {
        return { ...good, status: '' };
      } else {
        return { ...good, status: typeStatus };
      }
    }
    return good;
  };

  _counterLikesGoods = () => {
    const { data } = this.state;
    const likedGoods = data.filter((good) => good.status === 'like');
    return likedGoods.length;
  };

  isLike = (id) => {
    this.setState(({ data }) => {
      const newData = data.map((good) => {
        return this._onToggleStatus(id, good, 'like');
      });
      return { data: newData };
    });
  };

  isDisLike = (id) => {
    this.setState(({ data }) => {
      const newData = data.map((good) => {
        return this._onToggleStatus(id, good, 'dislike');
      });
      return { data: newData };
    });
  };

  onDelete = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((good) => {
        return good.id !== id;
      });
      return { data: newData };
    });
  };

  onAddGood = (id, name, price) => {
    const newGood = { id: id, name: name, price: price, status: '' };
    this.setState(({ data }) => {
      return { data: [...data, newGood], idCounter: id };
    });
  };

  filterGoods = (filterType) => {
    this.setState(() => ({
      filterType,
    }));
  };

  searchGoods = (searchString) => {
    this.setState(() => ({
      searchString: searchString.toLowerCase(),
    }));
  };

  onFilterGoods = (filterType) => {
    switch (filterType) {
      case 'allGoods':
        return this.state.data.filter((good) => {
          return good;
        });

      case 'popGoods':
        return this.state.data.filter((good) => {
          return good.status === 'like';
        });

      case 'richGoods':
        return this.state.data.filter((good) => {
          return good.price > 8000;
        });

      default:
        break;
    }
  };

  onSearchGoods = (goods, searchString) => {
    return goods.filter((good) => {
      return good.name.toLowerCase().indexOf(searchString) === 0;
    });
  };

  render() {
    const goodsCounter = this.state.data.length;
    const counteLikesGoods = this._counterLikesGoods();
    const showGoodsList = this.onSearchGoods(
      this.onFilterGoods(this.state.filterType).sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
      this.state.searchString
    );
    console.log(showGoodsList.length);
    showGoodsList.length === 0
      ? (this.goodsNotFound = true)
      : (this.goodsNotFound = false);
    return (
      <div className="app">
        <div className="wrapper">
          {/* <Test/> */}
          <GoodsInfo
            goodsCounter={goodsCounter}
            counteLikesGoods={counteLikesGoods}
          />
          <div className="goods-search">
            <div className="card text-bg-secondary   mb-3">
              <div className="card-body">
                <GoodsSearch searchGoods={this.searchGoods} />
                <GoodFilter
                  filterGoods={this.filterGoods}
                  filterType={this.state.filterType}
                />
              </div>
            </div>
          </div>
          <div
            className={
              // 'goods-not-found' + (showGoodsList.length === 0 ? ' show' : '')
              'goods-not-found' + (this.goodsNotFound ? ' show' : '')
            }
          >
            <h2>Товары не найдены</h2>
          </div>
          <GoodsList
            goodsDB={showGoodsList}
            isLike={this.isLike}
            isDisLike={this.isDisLike}
            onDelete={this.onDelete}
          />
          <GoodsAdd
            onAddGood={this.onAddGood}
            idCounter={this.state.idCounter}
          />
        </div>
      </div>
    );
  }
}

export default App;

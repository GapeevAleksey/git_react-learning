// import GoodFilter from '../goods-filter/goods-filter';
import { Component } from 'react';
import './goods-search.css';
import './goods-search.css';

class GoodsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  searchGoods = (e) => {
    this.setState({ searchString: e.currentTarget.value });
    this.props.searchGoods(e.currentTarget.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти товар"
        value={this.state.searchString}
        onChange={this.searchGoods}
      />
    );
  }
}

export default GoodsSearch;


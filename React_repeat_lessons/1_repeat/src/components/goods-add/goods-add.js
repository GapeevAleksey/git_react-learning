import { Component } from 'react';
import './goods-add.css'
class GoodsAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOfGood: '',
      priceOfGood: '',
    };
  }
  onValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { nameOfGood, priceOfGood } = this.state;
    const { onAddGood, idCounter } = this.props;
    return (
      <div className="card text-bg-secondary">
        <div className="card-body">
          <div className="app-add-form">
            <h3>Добавьте новый товар</h3>
            <form className="add-form d-flex form-style">
              <input
                type="text"
                autoFocus
                className="form-control new-post-label"
                placeholder="Название товара"
                name="nameOfGood"
                value={nameOfGood}
                onChange={this.onValueChange}
              />
              <input
                type="number"
                className="form-control new-post-label"
                placeholder="цена в $"
                name="priceOfGood"
                value={priceOfGood}
                onChange={this.onValueChange}
              />

              <button
                type="submit"
                className="btn btn-outline-light"
                onClick={(e) => {
                  e.preventDefault();
                  if (nameOfGood.length > 3 && priceOfGood !== '') {
                    onAddGood(idCounter + 1, nameOfGood, priceOfGood);
                    this.setState({ nameOfGood: '', priceOfGood: '' });
                  }
                }}
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsAdd;

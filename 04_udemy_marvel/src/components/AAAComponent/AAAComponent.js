import { Component } from 'react';

export default class AAAComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.drinks,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <span>Error: {error}</span>;
    } else if (!isLoaded) {
      return <span>Loading...</span>;
    } else {
      return (
        <ul>
          {items.map((item) => {
            return (
              <li key={item.idDrink} style={{ fontSize: 28 }}>
                <img width="80" src={item.strDrinkThumb} alt={item.strDrink} />
                <span> {item.strDrink}</span>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

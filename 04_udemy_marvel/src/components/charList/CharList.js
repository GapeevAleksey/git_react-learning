import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

class CharList extends Component {
  state = {
    comics: [],
    newComicsLoading: false,
    limit: 9,
    offset: 0,
  };
  MarvelService = new MarvelService();

  getComicsList = async () => {
    this.onComicsLoading();
    const { limit, offset } = this.state;
    const data = await this.MarvelService.getAllCharacters(limit, offset);
    this.setState({ newComicsLoading: false });
    this.setState(() => {
      return {
        comics: [...this.state.comics, ...data],
      };
    });
  };

  onComicsLoading = () => {
    this.setState({ newComicsLoading: true });
  };

  componentDidMount() {
    this.getComicsList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.offset < this.state.offset) {
      this.getComicsList();
    }
  }

  render() {
    const { comics, limit, newComicsLoading } = this.state;
    return (
      <div className="char__list">
        <ul className="char__grid">
          {comics.map((item, index) => {
            return (
              <li
                className="char__item"
                key={index}
                onClick={() => this.props.onCharSelected(item.id)}
              >
                <img src={item.thumbnail} alt="abyss" />
                <div className="char__name">{item.name}</div>
              </li>
            );
          })}
        </ul>
        <button
          className="button button__main button__long"
          disabled={newComicsLoading}
          onClick={() => {
            this.setState(() => {
              return { offset: this.state.offset + limit };
            });
          }}
        >
          <div className="inner">load more</div>
        </button>
      </div>

      //   <div className="char__list">
      //     <ul className="char__grid">
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item char__item_selected">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //       <li className="char__item">
      //         <img src={abyss} alt="abyss" />
      //         <div className="char__name">Abyss</div>
      //       </li>
      //     </ul>
      //     <button className="button button__main button__long">
      //       <div className="inner">load more</div>
      //     </button>
      //   </div>
    );
  }
}

export default CharList;

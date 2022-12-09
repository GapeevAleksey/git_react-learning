import './charList.scss';
import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';

const CharList = (props) => {
  const myRefs = {};
  const [qtyLoad, setQtyLoad] = useState(6);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => console.log(activeCard));

  const showCocks = () => {
    const { cocks, changeCurrentCock } = props;

    return cocks.map((item, index) => {
      if (index < qtyLoad) {
        return (
          <li
            // ref={(e) => (myRefs[index] = e)}
            className={
              activeCard === index ? 'char__item_selected' : 'char__item'
            }
            tabIndex={0}
            key={index}
            onClick={() => {
              setActiveCard(index);
              changeCurrentCock(item.idDrink);
            }}
          >
            <img src={item.strDrinkThumb} alt={item.strDrink} />
            <div className="char__name">{item.strDrink}</div>
          </li>
        );
      }
    });
  };

  return (
    <div className="char__list">
      {!props.loading ? (
        <ul className="char__grid">{showCocks()}</ul>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Spinner />
        </div>
      )}

      <button className="button button__main button__long">
        <div
          className="inner"
          onClick={() => setQtyLoad((prevState) => prevState + 3)}
        >
          load more
        </div>
      </button>
    </div>
  );
};

// class CharList extends Component {
//   state = {
//     qtyLoad: 6,
//     activeCard: null,
//   };
//   myRefs = {};

//   showCocks = () => {
//     const { qtyLoad, activeCard } = this.state;
//     const { cocks, changeCurrentCock } = this.props;

//     return cocks.map((item, index) => {
//       if (index < qtyLoad) {
//         return (
//           <li
//             ref={(e) => (this.myRefs[index] = e)}
//             className={
//               activeCard === index ? 'char__item_selected' : 'char__item'
//             }
//             tabIndex={0}
//             key={index}
//             onClick={() => {
//               this.setState({ activeCard: index });
//               changeCurrentCock(item.idDrink);
//             }}
//           >
//             <img src={item.strDrinkThumb} alt={item.strDrink} />
//             <div className="char__name">{item.strDrink}</div>
//           </li>
//         );
//       }
//     });
//   };

//   componentDidMount() {
//     console.log('didMount_CharList');
//   }

//   render() {
//     // console.log('render_CharList');
//     const dbCocks = this.showCocks();
//     const { loading } = this.props;
//     return (
//       <div className="char__list">
//         {!loading ? (
//           <ul className="char__grid">{dbCocks}</ul>
//         ) : (
//           <div style={{ textAlign: 'center' }}>
//             <Spinner />
//           </div>
//         )}

//         <button className="button button__main button__long">
//           <div
//             className="inner"
//             onClick={() =>
//               this.setState((prev) => ({ qtyLoad: prev.qtyLoad + 3 }))
//             }
//           >
//             load more
//           </div>
//         </button>
//       </div>
//     );
//   }
// }

export default CharList;

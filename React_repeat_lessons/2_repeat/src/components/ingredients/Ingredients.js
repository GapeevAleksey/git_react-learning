import '../charInfo/charInfo.scss';

const ShowIngs = ({ cock }) => {
  const ingsList = (cock) => {
    const ings = [];
    let numberOfIng = 1;

    for (let key in cock) {
      if (key.includes('strIngredient' + numberOfIng) && cock[key]) {
        ings.push(
          <li key={key} className="char__comics-item">
            {numberOfIng}. {cock[key]} -{' '}
            {cock['strMeasure' + numberOfIng]
              ? cock['strMeasure' + numberOfIng]
              : 'OPTIONAL'}
          </li>
        );
        numberOfIng++;
      }
    }
    return ings;
  };

  return <ul className="char__comics-list">{ingsList(cock)}</ul>;
};

export default ShowIngs;
